// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXbsPBhviqLGiySSgNjpsntUU39kERtIM",
    authDomain: "acebook-bfac8.firebaseapp.com",
    projectId: "acebook-bfac8",
    storageBucket: "acebook-bfac8.appspot.com",
    messagingSenderId: "477592354412",
    appId: "1:477592354412:web:049f2233cc2419046ea249",
    measurementId: "G-DHEY2TC6GN",
    databaseURL: 'https://acebook-bfac8-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);