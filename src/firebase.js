import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD8CY6jLM1rx6Fi9ujexQJIGGm4wF2aSAI",
  authDomain: "choosing-how.firebaseapp.com",
  projectId: "choosing-how",
  storageBucket: "choosing-how.appspot.com",
  messagingSenderId: "1016094448281",
  appId: "1:1016094448281:web:593bfada22ae17b0563608",
  measurementId: "G-9X0XS9WJ2X",
});

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
