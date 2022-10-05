// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5QqOgBO2Ti2wfh_TMvQnzFav5VrPt0BI",
  authDomain: "everybeer-b93ae.firebaseapp.com",
  projectId: "everybeer-b93ae",
  storageBucket: "everybeer-b93ae.appspot.com",
  messagingSenderId: "652372129792",
  appId: "1:652372129792:web:b2b34d6177df8f78b6c0e5",
  measurementId: "G-8DJTKC80DZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const database = getFirestore()
export const storage = getStorage(app)