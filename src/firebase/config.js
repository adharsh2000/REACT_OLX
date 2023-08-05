import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAEmJioKHHanuE1GM34xgoWAbssSpKwztc",
  authDomain: "olx-clone-e79ff.firebaseapp.com",
  projectId: "olx-clone-e79ff",
  storageBucket: "olx-clone-e79ff.appspot.com",
  messagingSenderId: "842354725447",
  appId: "1:842354725447:web:e96363764487811af09762",
  measurementId: "G-MB561CPT1E"
};

  export default firebase.initializeApp(firebaseConfig)