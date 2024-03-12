// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyACV5kwWWjKIysQ4_xxDKMeVxhb44HEnFQ",
    authDomain: "blog-web-759d3.firebaseapp.com",
    projectId: "blog-web-759d3",
    storageBucket: "blog-web-759d3.appspot.com",
    messagingSenderId: "442704522544",
    appId: "1:442704522544:web:bb09a411e6b962bb40acf5",
    measurementId: "G-V02SW1VN5W"
};

// Initialize Firebase
// Get a reference to the Firestore database

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



