import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCf3Vhr75GnuCdu43RFU1YlI31337Mco9E",
  authDomain: "vue-pwa-quiz.firebaseapp.com",
  databaseURL: "https://vue-pwa-quiz.firebaseio.com",
  projectId: "vue-pwa-quiz",
  storageBucket: "",
  messagingSenderId: "1069942611090"
})

export default firebase;