import app from "firebase/app";
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCOYyLHF1ll2_YmLjaCKiWy8RerPpru3Mc",
    authDomain: "myproject-4d230.firebaseapp.com",
    projectId: "myproject-4d230",
    storageBucket: "myproject-4d230.appspot.com",
    messagingSenderId: "636606614125",
    appId: "1:636606614125:web:c21fec4b33687c1a4f8d64"
  };


//   app.initializeApp(config);
//   const auth = app.auth();

//   const signupUser = (email, password) => app.auth.createUserWithEmailAndPassword(email, password);
//   const loginUser = (email, password) => app.auth.signInWithEmailAndPassword(email, password);

//   export {auth, signupUser, loginUser}

class Firebase {
    constructor () {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // inscription 
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    //connexion 
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // deconnexion 
    signoutUser = () => this.auth.signOut()

    //Récuérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;