// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKv0ROpcFUCCKCNMTo6DO_GXdaj9xGIRM",
  authDomain: "project-overman-ee773.firebaseapp.com",
  projectId: "project-overman-ee773",
  storageBucket: "project-overman-ee773.firebasestorage.app",
  messagingSenderId: "402227389844",
  appId: "1:402227389844:web:5af8b9045d9127ebd91b81",
  measurementId: "G-E668H6MQ23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);

export { app, auth };