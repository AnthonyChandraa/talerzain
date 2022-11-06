import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD_tMYPgG9-tOz9RTNqONykZdlX1h8OzoM",
  authDomain: "talerzain-aw.firebaseapp.com",
  projectId: "talerzain-aw",
  storageBucket: "talerzain-aw.appspot.com",
  messagingSenderId: "142739333571",
  appId: "1:142739333571:web:2ce87626d4bfd32606dd76",
  measurementId: "G-76BZNP84GW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);