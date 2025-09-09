// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyl3Db6dtR4JyS9vdhxbbXsZ0MbiX013U",
  authDomain: "carparking-4edbf.firebaseapp.com",
  projectId: "carparking-4edbf",
  storageBucket: "carparking-4edbf.firebasestorage.app",
  messagingSenderId: "953264764391",
  appId: "1:953264764391:web:275536f6ecea708e45f942",
  measurementId: "G-8E69RLCEPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);