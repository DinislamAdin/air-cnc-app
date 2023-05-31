// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx14RFbONx81QtnDH8eSKjfsF9lUr5coI",
  authDomain: "aricnc-app.firebaseapp.com",
  projectId: "aricnc-app",
  storageBucket: "aricnc-app.appspot.com",
  messagingSenderId: "330637839907",
  appId: "1:330637839907:web:1a8c901e667e8520d0ab96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;