// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import {  getFirestore} from "firebase/firestore";
import 'firebase/auth';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6cOdhP3wVmJOX864HrZaGAtkjVyzT3YM",
  authDomain: "books-case.firebaseapp.com",
  projectId: "books-case",
  storageBucket: "books-case.appspot.com",
  messagingSenderId: "876094594591",
  appId: "1:876094594591:web:04a1efbc010c1f2b383f2a",
  measurementId: "G-JNGP099H5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

const db = getFirestore(app)

export {
  app, auth, db
}