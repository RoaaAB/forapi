// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXMd1NE0UDdLtikU6J8ArQOQB0eZOQ2l8",
  authDomain: "ai-tool-682f3.firebaseapp.com",
  projectId: "ai-tool-682f3",
  storageBucket: "ai-tool-682f3.firebasestorage.app",
  messagingSenderId: "819518128765",
  appId: "1:819518128765:web:0a4c84469eb0538b47e714",
  measurementId: "G-BCH629PJ3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);