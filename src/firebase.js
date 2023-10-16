// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMd05s5_x23sZ2etH64G8QqmyrL-TDoeQ",
  authDomain: "scorers-1f67e.firebaseapp.com",
  projectId: "scorers-1f67e",
  storageBucket: "scorers-1f67e.appspot.com",
  messagingSenderId: "891957221217",
  appId: "1:891957221217:web:d3472f89abb2ec82ab1720",
  measurementId: "G-PDEPERL8R1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);