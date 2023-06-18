import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBM9cuK2iv8jQyQLZnaQYmXZqJa2WAW7hA",
    authDomain: "e-commerce-9e8d6.firebaseapp.com",
    projectId: "e-commerce-9e8d6",
    storageBucket: "e-commerce-9e8d6.appspot.com",
    messagingSenderId: "763014762248",
    appId: "1:763014762248:web:be495bb26e46bb221ce6bd"
};

const app =  firebase.initializeApp(firebaseConfig);
const fireDB = app.firestore();
const auth = app.auth();

export  {app, fireDB, auth};