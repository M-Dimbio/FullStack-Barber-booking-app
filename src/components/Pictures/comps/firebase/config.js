import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
//   authDomain: "the-net-ninja-sandbox.firebaseapp.com",
//   databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
//   projectId: "the-net-ninja-sandbox",
//   storageBucket: "the-net-ninja-sandbox.appspot.com",
//   messagingSenderId: "485942827092",
//   appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBAWxB_zLtPUh3vY0ImmUV9Co6zoo7J4kY",
  authDomain: "testing-e6b10.firebaseapp.com",
  projectId: "testing-e6b10",
  storageBucket: "testing-e6b10.appspot.com",
  messagingSenderId: "433024912531",
  appId: "1:433024912531:web:09ffb456ac285bede9d166"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };