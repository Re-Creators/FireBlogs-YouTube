import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBlOTZ_DrOi7HbywtfH4KcqYFZIIO7zV8",
    authDomain: "fireblogs-6f7a5.firebaseapp.com",
    projectId: "fireblogs-6f7a5",
    storageBucket: "fireblogs-6f7a5.appspot.com",
    messagingSenderId: "48699153852",
    appId: "1:48699153852:web:2e0d5143982b7abde21fb9",
    measurementId: "G-3HMB6M9Q0G"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {timeStamp}
export default firebaseApp.firestore()
  