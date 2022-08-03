import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTO_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.,
  appId: process.env.



  REACT_APP_AUTO_DOMAIN=my-giocommerce-app-dev.firebaseapp.com
REACT_APP_PROJECT_ID=my-giocommerce-app-dev
REACT_APP_STORAGE_BUCKET=my-giocommerce-app-dev.appspot.com
REACT_APP_MESSAGING_SENDER_ID=780623598843
REACT_APP_APP_ID=1:780623598843:web:4d888ae2908d9dbfab8c5e

})