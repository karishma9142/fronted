import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDT8m4oOKXTxH_M4GlEvBXHhY1SeCpaHfo",
  authDomain: "my-first-project-d06c5.firebaseapp.com",
  databaseURL: "https://my-first-project-d06c5-default-rtdb.firebaseio.com",
  projectId: "my-first-project-d06c5",
  storageBucket: "my-first-project-d06c5.appspot.com",
  messagingSenderId: "788072924022",
  appId: "1:788072924022:web:c1545589da8b705a153057",
  measurementId: "G-X8YDBV40RS"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
