import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDm7lmpItewpAIIih0FDQb3wp0CKJSnp4w",
    authDomain: "github-apis-fa01d.firebaseapp.com",
    databaseURL: "https://github-apis-fa01d.firebaseio.com",
    projectId: "github-apis-fa01d",
    storageBucket: "github-apis-fa01d.appspot.com",
    messagingSenderId: "119879391595",
    appId: "1:119879391595:web:e8c2722d6246c6685f942e",
    measurementId: "G-F1M9LXCZCM"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
