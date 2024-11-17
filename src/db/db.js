import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCaScJjNiTodVNvzcMUqYz201A8bWXgEiA",
    authDomain: "samsung-store-f409a.firebaseapp.com",
    projectId: "samsung-store-f409a",
    storageBucket: "samsung-store-f409a.firebasestorage.app",
    messagingSenderId: "336187368960",
    appId: "1:336187368960:web:c9cff4944fc591774d5ae5"
};


// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db