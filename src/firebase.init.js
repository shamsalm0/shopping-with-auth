// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8nUOb_x3rRYA8qSCr3HMS3p3dYU5DJZc",
  authDomain: "shop-sign-in-sign-up.firebaseapp.com",
  projectId: "shop-sign-in-sign-up",
  storageBucket: "shop-sign-in-sign-up.appspot.com",
  messagingSenderId: "24576691651",
  appId: "1:24576691651:web:6fa28f2c09e22cf0968176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;