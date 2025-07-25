// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUx3IATubWQr48wEihgBoEv6wi-vBt3vY",
  authDomain: "moviemuse-82434.firebaseapp.com",
  projectId: "moviemuse-82434",
  storageBucket: "moviemuse-82434.firebasestorage.app",
  messagingSenderId: "37054579397",
  appId: "1:37054579397:web:8e20d4b196af37669e26ac",
  measurementId: "G-ZD66E9RZRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
