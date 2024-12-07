// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw7QLe7P_EkJhXMYg6JYpMwwFRYQV-yMI",
    authDomain: "glasses-auth-1fcfb.firebaseapp.com",
    projectId: "glasses-auth-1fcfb",
    storageBucket: "glasses-auth-1fcfb.firebasestorage.app",
    messagingSenderId: "234526046883",
    appId: "1:234526046883:web:05ce089460f5284c719d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
