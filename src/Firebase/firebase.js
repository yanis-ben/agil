import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCFlVSxutjRZ24f31mz6HRPc668gWT5pz8",
  authDomain: "agil-779ba.firebaseapp.com",
  projectId: "agil-779ba",
  storageBucket: "agil-779ba.appspot.com",
  messagingSenderId: "850654398697",
  appId: "1:850654398697:web:08fee04e4df1ed356c4878",
  measurementId: "G-4X33PLR7CF"
};
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  const signupUser = (email, password) => firebase.auth.createUserWithEmailAndPassword(email, password);
  const loginUser = (email, password) => firebase.auth.signInWithEmailAndPassword(email, password);

  export {auth, signupUser, loginUser, googleAuthProvider}