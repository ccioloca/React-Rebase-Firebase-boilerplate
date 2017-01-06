import admin from "firebase-admin"
import Queue from "firebase-queue"

import serviceAccount from "./boilerplate-318f8-firebase-adminsdk-i3wt4-29990371b6.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boilerplate-318f8.firebaseio.com"
})

const AUTH_REF = admin.database().ref('authentication')

const QUEUES_REF = AUTH_REF.child('userWritable')
const NOTES_QUEUE_REF = QUEUES_REF.child('notes-queue')
const COMMENTS_QUEUE_REF = QUEUES_REF.child('comments-queue')

const USER_PRIVATE_REF = AUTH_REF.child('userReadable')
const PUBLIC_NOTES_REF = AUTH_REF.child('allMembers').child('notes')

const queue = new Queue(NOTES_QUEUE_REF, { 'sanitize': false }, function(data, progress, resolve, reject) {
  // Read and process task data
  progress(10);

  if ( data.action === 'delete' ) {
    PUBLIC_NOTES_REF.child(data.language).child(data.target).child('uid').once('value').then((snapshot) => { 
      if(snapshot.val() == data.uid) {
        USER_PRIVATE_REF.child(data.uid).child('notes').child(data.target).remove()
        PUBLIC_NOTES_REF.child(data.language).child(data.target).remove()
        NOTES_QUEUE_REF.child(data._id).remove()
        resolve()
      } else {
        resolve()
      }
    })
  }

  if ( data.action === 'edit' ) {
    admin.auth().verifyIdToken(data.idToken)
      .then((decodedToken) => {
        var uid = decodedToken.uid;
        PUBLIC_NOTES_REF.child(data.language).child(data.note_id).child('uid').once('value').then(snapshot => {
          if ( snapshot.val() === uid ) {
            USER_PRIVATE_REF.child(uid).child('notes').child(data.note_id).child('note').set(data.data.text);
            USER_PRIVATE_REF.child(uid).child('notes').child(data.note_id).child('edit_date').set(data.data.edit_date);
            PUBLIC_NOTES_REF.child(data.language).child(data.note_id).child('note').set(data.data.text);
            PUBLIC_NOTES_REF.child(data.language).child(data.note_id).child('edit_date').set(data.data.edit_date);
            resolve()
          } else {
            reject()
          }
        })
      }).catch(error => {
        console.log(error)
        reject()
      })
  }

  if ( data.action === 'add' ) {
    const newPrivateNote = Object.assign({}, data.note)
    delete newPrivateNote.isPublic
    delete newPrivateNote.displayName
    delete newPrivateNote.photoURL
    delete newPrivateNote.uid

    return USER_PRIVATE_REF.child(data.note.uid).child('notes').child(data._id).set(newPrivateNote)
      .then(function(){

        progress(10);
        USER_PRIVATE_REF.child(data.note.uid).child('notesCount').transaction(i => i + 1)

        if (data.isPublic === true) {
          PUBLIC_NOTES_REF.child(data.language).child(data._id).set(data.note)
          PUBLIC_NOTES_REF.child(`${data.language}NotesCount`).transaction(i => i + 1)
        }

        progress(20)
        NOTES_QUEUE_REF.child(data._id).remove()

      })
      .then(resolve)
      .catch(reject)
  }

})

const commentsQueue = new Queue(COMMENTS_QUEUE_REF, { 'sanitize': false }, function(data, progress, resolve, reject) {
  // Read and process task data
  progress(10);

  if ( data.action === 'delete' ) {
    admin.auth().verifyIdToken(data.idToken)
      .then((decodedToken) => {
        var uid = decodedToken.uid;
        PUBLIC_NOTES_REF.child(data.language).child(data.note_id).child('comments').child(data.target).child('uid').once('value').then((snapshot) => {
          if(snapshot.val() === uid) {
            PUBLIC_NOTES_REF.child(data.language).child(data.note_id).child('comments').child(data.target).remove()
            NOTES_QUEUE_REF.child(data._id).remove()
            resolve()
          } else {
            reject()
          }
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  if ( data.action === 'add' ) {
    return PUBLIC_NOTES_REF.child(data.language).child(data.note_id).child('comments').child(data._id).set(data.comment)
      .then(function(){
        progress(20)
        COMMENTS_QUEUE_REF.child(data._id).remove()
      })
      .then(resolve)
      .catch(reject)
  }

})

process.on('SIGINT', function() {
  console.log('Starting queue shutdown');
  queue.shutdown().then(function() {
    console.log('Finished queue shutdown');
    process.exit(0);
  });
});
