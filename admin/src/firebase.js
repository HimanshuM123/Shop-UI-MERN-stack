// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi8gUMDniGh-jlVX5Ky4MrqEIkldzMpfg",
  authDomain: "shop-5bc4e.firebaseapp.com",
  projectId: "shop-5bc4e",
  storageBucket: "shop-5bc4e.appspot.com",
  messagingSenderId: "501089901816",
  appId: "1:501089901816:web:e126f099badf640a5f2f0d",
  measurementId: "G-FTG1NR8S3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
