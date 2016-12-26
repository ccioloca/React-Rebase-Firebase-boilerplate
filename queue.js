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
const USER_PRIVATE_REF = AUTH_REF.child('userReadable')
const PUBLIC_NOTES_REF = AUTH_REF.child('allMembers').child('notes')

const queue = new Queue(NOTES_QUEUE_REF, { 'sanitize': false }, function(data, progress, resolve, reject) {
  // Read and process task data
  progress(10);
  if (data.note.isPublic === true) {
    return PUBLIC_NOTES_REF.push(data.note)
      .then(function(){
        PUBLIC_NOTES_REF.child('count').transaction(i => i + 1)
        progress(20)
        console.log('success')
        USER_PRIVATE_REF.child(data.note.uid).child('notes').push(data.note)

      })
      .then(resolve)
      .catch(reject)
  } else {
    return USER_PRIVATE_REF.child(data.note.uid).child('notes').push(data.note)
      .then(function(){
        progress(20)
        console.log('success')
      })
      .then(resolve)
      .catch(reject)
  }
})
