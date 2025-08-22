// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1FztJbBopqFaNsZQQmc7O0yr_ni7TAqI",
  authDomain: "bebusy-f5ec4.firebaseapp.com",
  projectId: "bebusy-f5ec4",
  storageBucket: "bebusy-f5ec4.firebasestorage.app",
  messagingSenderId: "471247833912",
  appId: "1:471247833912:web:12ce79073bedf1ed71cfcd",
  measurementId: "G-W9MMTY8YPE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);