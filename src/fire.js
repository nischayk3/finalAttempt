 
 import firebase from 'firebase'
 import "firebase/auth"

 const app = firebase.initializeApp({
  apiKey: "AIzaSyDxczJl39u54s6ewL8pc73FK1R34kiaAXk",
  authDomain: "vtunation.firebaseapp.com",
  projectId: "vtunation",
  storageBucket: "vtunation.appspot.com",
  messagingSenderId: "803415175057",
  appId: "1:803415175057:web:67bb0cb961226553bb7430",
  measurementId: "G-GXJL2QGHGB"
})
export const auth = firebase.auth()
export default app