import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRZ4fq6-_JN5oHH9M94qxJ4QRpds13YO4",
    authDomain: "nail-collection-aff05.firebaseapp.com",
    projectId: "nail-collection-aff05",
    storageBucket: "nail-collection-aff05.appspot.com",
    messagingSenderId: "104495012138",
    appId: "1:104495012138:web:ee8e4c9614b4ce1d602653"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }
