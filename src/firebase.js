import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9hMo6cE-TB9MAzeWyXepJFkcEyfPIfOU",
  authDomain: "clone-11ead.firebaseapp.com",
  projectId: "clone-11ead",
  storageBucket: "clone-11ead.appspot.com",
  messagingSenderId: "232167298677",
  appId: "1:232167298677:web:995400c4134eaa4f514a3c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
