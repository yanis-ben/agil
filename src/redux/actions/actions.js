import { auth, googleAuthProvider } from "../../Firebase/firebase";
import * as types from "../actions-type/actionType";
import { 
    collection, 
    addDoc,
  } from "firebase/firestore";
  import {db} from "../../Firebase/firebase";


// SignUp actions
export const registerStart = () => ({
    type: types.REGISTER_START,
})

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
})

export const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
})


// Login actions
export const loginStart = () => ({
    type: types.LOGIN_START,
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
})

export const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
})


//LOGOUT actions
export const logoutStart = () => ({
    type: types.LOGOUT_START,
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})

export const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
})

//RESSET PASSWORD actions
export const ressetPasswordStart = () => ({
    type: types.RESSET_PASSWORD_START,
})

export const ressetPasswordSuccess = (user) => ({
    type: types.RESSET_PASSWORD_SUCCESS,
    payload: user,
})

export const ressetPasswordFail = (error) => ({
    type: types.RESSET_PASSWORD_FAIL,
    payload: error,
})

// Google actions
export const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
})

export const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
})

export const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error,
})

export const createUserDocStart = () => ({
  type : types.CREATE_USER_START,
})

export const stateDoc = {
    name : "",
    age : 0,
}
export const createUserDocSuccess = () => ({
    type : types.CREATE_USER_SUCCESS,
    payload : stateDoc,
  })

  export const createUserDocFail = () => ({
    type : types.CREATE_USER_FAIL,
  })



  export const createUserDocInitiate = (name, age) => {
      return function (dispatch) {
          dispatch(createUserDocSuccess(name, age));
          const userCollectionRef = collection(db, "users");
          addDoc(userCollectionRef, {name , age })
      }
  }

// SignUp
export const registerInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(registerStart());
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
            // user.updateProfile({
            //     displayName,
            // });
            dispatch(registerSuccess(user));
        })
        .catch((error) => dispatch(registerFail(error.message)));
    }
}

// Login
export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        auth
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(loginSuccess(user));
        })
        .catch((error) => dispatch(loginFail(error.message)));
    }
}

//LOGOUT
export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        auth
        .signOut()
        .then((resp) => dispatch(logoutSuccess()))
        .catch((error) => dispatch(logoutFail(error.message)));
    }
}

//RESSET PASSWORD actions
export const ressetPasswordInitiate = (email) => {
    return function (dispatch) {
        dispatch(ressetPasswordStart());
        auth
        .sendPasswordResetEmail(email)
        .then(({user}) => {
            dispatch(ressetPasswordSuccess(user));
        })
        .catch((error) => dispatch(ressetPasswordFail(error.message)));
    }
}

// Google
export const googleSignInInitiate = () => {
    return function (dispatch) {
        dispatch(googleSignInStart());
        auth
        .signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(googleSignInSuccess(user));
        })
        .catch((error) => dispatch(googleSignInFail(error.message)));
    }
}