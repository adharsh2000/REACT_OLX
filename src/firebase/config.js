
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC1yrP_wm4PypknsFOH_MLcLEZWn7-hQH0",
    authDomain: "olx-clone-83302.firebaseapp.com",
    projectId: "olx-clone-83302",
    storageBucket: "olx-clone-83302.appspot.com",
    messagingSenderId: "529775863042",
    appId: "1:529775863042:web:d1b2fe8a351cf9a7418e1b",
    measurementId: "G-JY01T34DPX"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

