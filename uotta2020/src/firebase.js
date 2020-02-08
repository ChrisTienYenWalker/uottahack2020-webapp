// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";

const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyAANLMlWnz94p6QmRe3w6Hcp-y-shFY7ok",
    authDomain: "uottahack2020.firebaseapp.com",
    databaseURL: "https://uottahack2020.firebaseio.com",
    projectId: "uottahack2020",
    storageBucket: "uottahack2020.appspot.com",
    messagingSenderId: "1068512406138",
    appId: "1:1068512406138:web:d973d0331c20a0e51b29c3"
  };

const FirebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// console.log(db)
export default firebase;
