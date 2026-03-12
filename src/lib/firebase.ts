import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQshts28oSi-7r9InkzCRk908FO5eGGuQ",
  authDomain: "bhaargava-cutz-b923a.firebaseapp.com",
  projectId: "bhaargava-cutz-b923a",
  storageBucket: "bhaargava-cutz-b923a.firebasestorage.app",
  messagingSenderId: "1045036342659",
  appId: "1:1045036342659:web:78db135f3d773d1681eab6",
  measurementId: "G-0QQPP87WR6"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
