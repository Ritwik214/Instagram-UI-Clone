import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBJZEXIcJDZfD8NqX7_OqGhiBJrPIyWnME",
    authDomain: "insta-clone-7fc7d.firebaseapp.com",
    projectId: "insta-clone-7fc7d",
    storageBucket: "insta-clone-7fc7d.appspot.com",
    messagingSenderId: "335182776802",
    appId: "1:335182776802:web:b87ca62b0d4222423691bb"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;



export { firebase, FieldValue };