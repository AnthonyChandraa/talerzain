// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_tMYPgG9-tOz9RTNqONykZdlX1h8OzoM",
  authDomain: "talerzain-aw.firebaseapp.com",
  projectId: "talerzain-aw",
  storageBucket: "talerzain-aw.appspot.com",
  messagingSenderId: "142739333571",
  appId: "1:142739333571:web:2ce87626d4bfd32606dd76",
  measurementId: "G-76BZNP84GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);