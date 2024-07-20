// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC7Cyxq2RFExqzwpFtECo-P-jFmO2Ec4Y",
  authDomain: "happygpt-web.firebaseapp.com",
  projectId: "happygpt-web",
  storageBucket: "happygpt-web.appspot.com",
  messagingSenderId: "605555704542",
  appId: "1:605555704542:web:240b32dab3b3ded738b84f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
