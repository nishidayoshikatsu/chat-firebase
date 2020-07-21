import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCM8ELe239vPiuXQdYNtN3yv0Pc8Z4kQhs',
    authDomain: 'chat-firebase-d60d3.firebaseapp.com',
    databaseURL: 'https://chat-firebase-d60d3.firebaseio.com',
    projectId: 'chat-firebase-d60d3',
    storageBucket: 'chat-firebase-d60d3.appspot.com',
    messagingSenderId: '284526050013',
    appId: '1:284526050013:web:d1e62e136425edaeb5f934',
    measurementId: 'G-S11K7YCSZN',
  })
}

export default firebase
