import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBDzTitQr5vmGm8gA6-d5Op-4PhoI_WCco",
    authDomain: "nuxt-blog-1eeb7.firebaseapp.com",
    databaseURL: "https://nuxt-blog-1eeb7-default-rtdb.firebaseio.com",
    projectId: "nuxt-blog-1eeb7",
    storageBucket: "nuxt-blog-1eeb7.appspot.com",
    messagingSenderId: "897373629816",
    appId: "1:897373629816:web:a3cecc0412ffbdd15bac8d"
  };

  let app = null

  if(!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig)
  }

  export default firebase