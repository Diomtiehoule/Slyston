// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getFirestore,collection,addDoc,getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfVY0ZgXyyxFzG1yGdolJ0TNj_8JhV2KQ",
    authDomain: "slystonbank.firebaseapp.com",
    projectId: "slystonbank",
    storageBucket: "slystonbank.appspot.com",
    messagingSenderId: "225846274598",
    appId: "1:225846274598:web:658cf49ecfd602747014e7",
    measurementId: "G-NB2646C4EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);

//mes collections
const userCollection=collection(db, 'users')



export {db, auth, userCollection,createUserWithEmailAndPassword,addDoc,signInWithEmailAndPassword,getDocs}