// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzExWC8pmkmuDgWlZ4yideXcDnGC3mnck",
  authDomain: "hotel-bear-plus.firebaseapp.com",
  projectId: "hotel-bear-plus",
  storageBucket: "hotel-bear-plus.appspot.com",
  messagingSenderId: "245525804091",
  appId: "1:245525804091:web:9c9d97faf5a1a13f94181e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
