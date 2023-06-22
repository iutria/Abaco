import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8gq1nkjIO7MpOXU1SDPReAX1gsenf2U4",
  authDomain: "abaco-app-b564d.firebaseapp.com",
  projectId: "abaco-app-b564d",
  storageBucket: "abaco-app-b564d.appspot.com",
  messagingSenderId: "862306344644",
  appId: "1:862306344644:web:7e9f7eca7092e4a827f391"
};

initializeApp(firebaseConfig);

export const db = getFirestore();