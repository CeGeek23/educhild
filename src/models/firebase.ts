// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY6Aibt7Cv3ho7AHIvLPZ7WGTQ7MB_aXU",
  authDomain: "educhild-app.firebaseapp.com",
  projectId: "educhild-app",
  storageBucket: "educhild-app.appspot.com",
  messagingSenderId: "1044245249928",
  appId: "1:1044245249928:web:726e8251ec21b3ca1f043d",
  measurementId: "G-C0ZEN7CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);