import firebase from "firebase";
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyD9tCtedez-EfynkoEwnGKI5E_tOWV5WOE",
    authDomain: "barter-system-282cd.firebaseapp.com",
    projectId: "barter-system-282cd",
    storageBucket: "barter-system-282cd.appspot.com",
    messagingSenderId: "1045943203790",
    appId: "1:1045943203790:web:438ae5036d411d9d8c1d9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();