import admin from "firebase-admin"
import queue from "firebase-queue"

import serviceAccount from "./boilerplate-318f8-firebase-adminsdk-i3wt4-29990371b6.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boilerplate-318f8.firebaseio.com"
})

const REF = admin.database().ref()

const QUEUE_REF = REF.child('firebase-queue')
const ADMIN_REF = REF.child('authentication/admins')

var user = {
  "isAnonymous": false,
  "emailVerified": true,
  "email": "chris@quiver.is",
  "uid": "jkhfDGFHJkfdhEWQUR_ew"
}

QUEUE_REF.child('tasks').push({
  timestamp: new Date().toString(),
  user: user
}).then(function(res) {
  console.log('Pushed Login')
})
