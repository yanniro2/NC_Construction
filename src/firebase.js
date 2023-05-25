
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDr9osVCfgkHsWTlz9M28FsUE_oMhrp32g",
    authDomain: "nc-constraction.firebaseapp.com",
    databaseURL: "https://nc-constraction-default-rtdb.firebaseio.com",
    projectId: "nc-constraction",
    storageBucket: "nc-constraction.appspot.com",
    messagingSenderId: "604274858013",
    appId: "1:604274858013:web:268af5ef1770ffa1ac4ef4"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

// Get the Firestore instance
const db = getFirestore(app);

export { auth, db };
