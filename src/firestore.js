// src/firebase.js or src/firestore.js

import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

// Add data to Firestore
const addData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document:", e);
  }
};

export { addData };
