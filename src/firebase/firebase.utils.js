import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVoIsLJU500ZIeVPZBxtMpWsOCzYHqfcc",
    authDomain: "crown-db-4a35b.firebaseapp.com",
    databaseURL: "https://crown-db-4a35b.firebaseio.com",
    projectId: "crown-db-4a35b",
    storageBucket: "crown-db-4a35b.appspot.com",
    messagingSenderId: "493504812666",
    appId: "1:493504812666:web:2b3ce757a8610ecc3a8dc3",
    measurementId: "G-TNP6XHLTR2"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;