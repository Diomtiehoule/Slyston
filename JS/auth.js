// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app); 

const auth = firebase.auth();
const db = firebase.firestore();












// Inscription des utilisateurs

const mailVal = document.querySelector('.Email');
const passVal = document.querySelector('.Passeword');
const passConfirm =  document.querySelector('.Email_confirme');

const Email = mailVal.value;
const key = passVal.value;

auth.createUserWithEmailAndPassword(Email,key).then(cred =>{
    console.log(cred);
})

Form.reset();