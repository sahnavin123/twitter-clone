import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH_Kvoia2UT3MQM1mim7pTfC4aW2suWas",
  authDomain: "twitter-clone-11f33.firebaseapp.com",
  projectId: "twitter-clone-11f33",
  storageBucket: "twitter-clone-11f33.appspot.com",
  messagingSenderId: "179195642418",
  appId: "1:179195642418:web:cb5aaf16f4ad4e3f23b22b",
  measurementId: "G-613EQ15FLR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
