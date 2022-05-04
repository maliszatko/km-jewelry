import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBk0R1TFXf8CkNS-0YQsjvgP9bHRtsi0iI",
  authDomain: "km-jewelry.firebaseapp.com",
  projectId: "km-jewelry",
  storageBucket: "km-jewelry.appspot.com",
  messagingSenderId: "1008654112401",
  appId: "1:1008654112401:web:36f9a211131436c5e91130",
  databaseURL:
    "https://km-jewelry-default-rtdb.europe-west1.firebasedatabase.app",
  measurementId: "G-R5L4SWSRX8"
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(app);
export default db;
