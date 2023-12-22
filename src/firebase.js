// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnFkrEbp0cMHB5I1yyzCTpWvSiz6CuDfE",
  authDomain: "clone-project-796c1.firebaseapp.com",
  projectId: "clone-project-796c1",
  storageBucket: "clone-project-796c1.appspot.com",
  messagingSenderId: "41397027651",
  appId: "1:41397027651:web:bb7f7cab08183e73a1e5f6",
  measurementId: "G-1Y245RTFHY",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };

// const analytics = getAnalytics(app);

// export { auth };
