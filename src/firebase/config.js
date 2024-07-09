// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqHl8RqdNLBLMhTdLT0dz4uWG5tHF0ONA",
  authDomain: "react-cursos-3fa4e.firebaseapp.com",
  projectId: "react-cursos-3fa4e",
  storageBucket: "react-cursos-3fa4e.appspot.com",
  messagingSenderId: "807677706264",
  appId: "1:807677706264:web:403206f00f85b85bd4436d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );