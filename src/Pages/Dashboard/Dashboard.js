import React, { useState, useEffect, useContext } from "react";
import { Home } from "..";
import { FirebaseContext } from "../../Firebase";


const Dashboard = (props) => {
    //loggedInStatus={loggedInStatus}

    const {handleLogin, loggedInStatus} = props;
    /* on récupère les methods de firebase.js grace UseContext
     loginUser la mthode d'ont j'ai besoin  */
    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null); 
const [userData, setUserData] = useState({})
    // ComponentDidMount en class
    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })

        // if (!!userSession) {
        //     firebase.user(userSession.uid)
        //     .get()
        //     .then( doc => {
        //         if (doc && doc.exists) {
        //             const myData = doc.data();
        //             setUserData(myData)
        //         }
        //     })
        //     .catch( error => {
        //         console.log(error);
        //     })
        // }

        //Permet de faire le nétoyage pour éviter les fuite mémoires
        return () => {
            listener();
        }
    }, [])
    //<Navbar/>
    return userSession === null ?(
        <p>Loading...</p>
    ) : (
        <div>
            
            <div>Dashboard : {userSession.email}
            </div>
        </div>
    )
}

export default Dashboard;