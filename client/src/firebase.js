// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1xMCuaRWXH2GpMtdjWa_8_WwuFs4e5-w",
  authDomain: "proyecto-e64bf.firebaseapp.com",
  databaseURL: "https://proyecto-e64bf-default-rtdb.firebaseio.com",
  projectId: "proyecto-e64bf",
  storageBucket: "proyecto-e64bf.appspot.com",
  messagingSenderId: "214423963034",
  appId: "1:214423963034:web:946426b252468df3116623"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)