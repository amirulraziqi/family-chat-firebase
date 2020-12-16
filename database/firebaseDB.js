import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTnE3P4S4dSnSpJJmZ0N3wMdL4hoMoXJ0",
    authDomain: "family-chat-11222.firebaseapp.com",
    projectId: "family-chat-11222",
    storageBucket: "family-chat-11222.appspot.com",
    messagingSenderId: "741664032518",
    appId: "1:741664032518:web:10089d1d989036bea60087",
    measurementId: "G-L41WC20H1N"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;