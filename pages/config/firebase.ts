// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPkPtFBWzFBlUBhGZiTUmL6F1zLJNlawk",
  authDomain: "appclone-706cb.firebaseapp.com",
  projectId: "appclone-706cb",
  storageBucket: "appclone-706cb.appspot.com",
  messagingSenderId: "210010785520",
  appId: "1:210010785520:web:d3f83deb000f4abf5b6435"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig) // lấy tất cả app ? trả app đầu tiên : initializeApp

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {db, auth, provider}