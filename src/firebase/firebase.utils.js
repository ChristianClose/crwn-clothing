import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAuFtkIzKflxswASakt4jUtc5f-QP39HzA",
    authDomain: "crwn-db-56199.firebaseapp.com",
    databaseURL: "https://crwn-db-56199.firebaseio.com",
    projectId: "crwn-db-56199",
    storageBucket: "crwn-db-56199.appspot.com",
    messagingSenderId: "1075692982662",
    appId: "1:1075692982662:web:682634974d41866e065c07",
    measurementId: "G-F9Q26KQR4W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
