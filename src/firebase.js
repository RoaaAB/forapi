// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signOut,updateProfile} from "firebase/auth"; // Only import signOut
import { getFirestore } from "firebase/firestore"; // If you're using Firestore

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

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app); // If you're using Firestore

// Exporting required methods for use in other components
export { auth, db, signOut,updateProfile}; // Export only what's needed
