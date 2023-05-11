
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCFwRFJXg_Xrcmb1ZkDUg3eJCouN37X6sE",
    authDomain: "ppa-project-90913.firebaseapp.com",
    projectId: "ppa-project-90913",
    storageBucket: "ppa-project-90913.appspot.com",
    messagingSenderId: "1058701150774",
    appId: "1:1058701150774:web:64de0b8ee155313e5e2697"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
