import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-mtjY0do5RFsuOnP7pOl-FFzv7pMT0Fc",
  authDomain: "my-resume-72adf.firebaseapp.com",
  projectId: "my-resume-72adf",
  storageBucket: "my-resume-72adf.appspot.com",
  messagingSenderId: "313518234492",
  appId: "1:313518234492:web:e34b057dfe13512e7da2f9",
  measurementId: "G-K0TSNBKWHX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
