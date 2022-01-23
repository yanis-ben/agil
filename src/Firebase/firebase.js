import firebase from 'firebase/compat/app';
//import 'firebase/compat/firestore';
import { getFirestore} from "firebase/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFlVSxutjRZ24f31mz6HRPc668gWT5pz8",
  authDomain: "agil-779ba.firebaseapp.com",
  databaseURL: "https://agil-779ba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agil-779ba",
  storageBucket: "agil-779ba.appspot.com",
  messagingSenderId: "850654398697",
  appId: "1:850654398697:web:08fee04e4df1ed356c4878",
  measurementId: "G-4X33PLR7CF"
};
export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  const signupUser = (email, password) => firebase.auth.createUserWithEmailAndPassword(email, password);
  const loginUser = (email, password) => firebase.auth.signInWithEmailAndPassword(email, password);

  export {auth, signupUser, loginUser, googleAuthProvider}