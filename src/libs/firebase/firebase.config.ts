import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCA9GQAvQu4l_xzrlzAnqjTMq_I2ZPcxDw",
    authDomain: "scoring-trust.firebaseapp.com",
    projectId: "scoring-trust",
    storageBucket: "scoring-trust.appspot.com",
    messagingSenderId: "439188303777",
    appId: "1:439188303777:web:1f3c1e23d80b777776e5e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

export {firebaseAuth}