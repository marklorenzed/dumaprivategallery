import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBpgGpBEmhCqYdj4mDxuZ-0f8kCnPQVKbk",
  authDomain: "dumaportfolio.firebaseapp.com",
  databaseURL: "https://dumaportfolio.firebaseio.com",
  projectId: "dumaportfolio",
  storageBucket: "dumaportfolio.appspot.com",
  messagingSenderId: "1045857935544",
  appId: "1:1045857935544:web:ec54a8c03cc62fe2db544d",
  measurementId: "G-51VMKS6WXS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
