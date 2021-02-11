import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBECPn9bjp5YUXpX-sAnT_XJgwSE4G5a3o",
  authDomain: "restaurante-61624.firebaseapp.com",
  projectId: "restaurante-61624",
  storageBucket: "restaurante-61624.appspot.com",
  messagingSenderId: "150275746523",
  appId: "1:150275746523:web:f1eeb1f45fe10a8e1ffafe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {
  db,
  firebase
}