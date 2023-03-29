import firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA9eTyj6yJPQlTdfgjSFvCkfKbsaM84NVc",
    authDomain: "olxs-8508f.firebaseapp.com",
    projectId: "olxs-8508f",
    storageBucket: "olxs-8508f.appspot.com",
    messagingSenderId: "738589982632",
    appId: "1:738589982632:web:ea1d11ccdd363899aa279d",
    measurementId: "G-FW0117YPQM"
  };
export default  firebase.initializeApp(firebaseConfig);
