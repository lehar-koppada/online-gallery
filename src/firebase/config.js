import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBabo1lQEcG2euTXnfud-tqeHe0oCOj_GY",
    authDomain: "first-firebase-project-67dbe.firebaseapp.com",
    projectId: "first-firebase-project-67dbe",
    storageBucket: "first-firebase-project-67dbe.appspot.com",
    messagingSenderId: "331502840933",
    appId: "1:331502840933:web:fc2d98e0eba16bf6172a8c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };