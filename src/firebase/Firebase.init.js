// never do this on client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbQN72tVKI7KvmFt--heoK28M2Bh6G-y4",
  authDomain: "simple-firebase-c39f2.firebaseapp.com",
  projectId: "simple-firebase-c39f2",
  storageBucket: "simple-firebase-c39f2.firebasestorage.app",
  messagingSenderId: "1089214100541",
  appId: "1:1089214100541:web:2c92c8a40071491e90a654",
  measurementId: "G-XLESWVY333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default auth;