// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvZklp9b0w-cZrPgr8taiAMFS8eTG4Bs0",
  authDomain: "login-movil-gates.firebaseapp.com",
  projectId: "login-movil-gates",
  storageBucket: "login-movil-gates.appspot.com",
  messagingSenderId: "651955039492",
  appId: "1:651955039492:web:e414e0ff2a7eaff4807451"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)