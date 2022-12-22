import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: "order-together-ad9eb.appspot.com",
  // messagingSenderId: "355739287994",
  // appId: "1:355739287994:web:687aad349b40d247a21d83",
  // measurementId: "G-SR3C9XDZTX",
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseDatabase = getDatabase(firebaseApp);
export const firebaseAuth = getAuth();
