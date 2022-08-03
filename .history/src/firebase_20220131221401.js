import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "",
  projectId: "my-giocommerce-app-dev",
  storageBucket: "my-giocommerce-app-dev.appspot.com",
  messagingSenderId: "780623598843",
  appId: "1:780623598843:web:4d888ae2908d9dbfab8c5e"

})