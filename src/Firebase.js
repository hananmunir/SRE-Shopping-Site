// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9hOkQxSPLGGSWn1jKZO6YV-TkHgHh3f4",
  authDomain: "shoppingsite-9e48a.firebaseapp.com",
  projectId: "shoppingsite-9e48a",
  storageBucket: "shoppingsite-9e48a.appspot.com",
  messagingSenderId: "156788443476",
  appId: "1:156788443476:web:5a499928dc6e7271c960c1",
  measurementId: "G-50GDQRPZ6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);