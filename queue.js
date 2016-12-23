import admin from "firebase-admin"
import Queue from "firebase-queue"

import serviceAccount from "./boilerplate-318f8-firebase-adminsdk-i3wt4-29990371b6.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boilerplate-318f8.firebaseio.com"
})

const REF = admin.database().ref()

const QUEUE_REF = REF.child('firebase-queue')
const NOTES_REF = QUEUE_REF.child('notes-queue')
const PRIVATE_NOTES_REF = REF.child('authentication/userReadable')

const queue = new Queue(NOTES_REF, { 'sanitize': false }, function(data, progress, resolve, reject) {
  // Read and process task data
  progress(10);
  return PRIVATE_NOTES_REF.child(data.note.uid).child('notes').push(data.note)
    .then(function(){
      progress(20)
      console.log('success')
    })
    .then(resolve)
    .catch(reject)
})
