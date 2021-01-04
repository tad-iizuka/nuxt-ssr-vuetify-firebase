import firebase from 'firebase/app'

if (!firebase.apps.length) {
  const app = firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  })
}

// export default firebase

const FUNCTIONS_URL = process.env.FUNCTIONS_URL

export default ({}, inject) => {
  inject('FUNCTIONS_URL', FUNCTIONS_URL)
}