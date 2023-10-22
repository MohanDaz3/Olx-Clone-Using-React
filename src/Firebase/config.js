import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAfFSJtsr-_CGJZkGujoPUb7KONxBg18Gg",
    authDomain: "olx-clone-d84b9.firebaseapp.com",
    projectId: "olx-clone-d84b9",
    storageBucket: "olx-clone-d84b9.appspot.com",
    messagingSenderId: "661157803813",
    appId: "1:661157803813:web:03cb5a59306f04f4b60ccc",
    measurementId: "G-25KE68KC28"
  };

export default firebase.initializeApp(firebaseConfig)