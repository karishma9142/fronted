import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT8m4oOKXTxH_M4GlEvBXHhY1SeCpaHfo",
  authDomain: "my-first-project-d06c5.firebaseapp.com",
  projectId: "my-first-project-d06c5",
  storageBucket: "my-first-project-d06c5.firebasestorage.app",
  messagingSenderId: "788072924022",
  appId: "1:788072924022:web:c1545589da8b705a153057",
  measurementId: "G-X8YDBV40RS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app);
export const storage = getStorage(app);

