import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase'


const config ={

    apiKey: "XXXXXXXXXXXX",
    authDomain: "app.firebaseapp.com",
    databaseURL: "https://app.firebaseio.com",
    projectId: "XXXXXX2",
    storageBucket: "XXXXXX.appspot.com",
    messagingSenderId: "5..........",
    appId: "1:52807............."
}

firebase.initializeApp(config);
export default firebase;

/*

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 

*/