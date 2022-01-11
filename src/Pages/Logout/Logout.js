import React, { useState, useEffect, useContext} from 'react';
import { FirebaseContext } from "../../Firebase";
import Button from '@material-ui/core/Button';
import {MDBNavbarNav , MDBNavItem, MDBCollapse} from "mdbreact";

const Logout = (props) => {

    /* on récupère les methods de firebase.js grace UseContext
     loginUser la mthode d'ont j'ai besoin  */
     const firebase = useContext(FirebaseContext);

    const [logout, setLogout] = useState(false);
    console.log(logout, "111");

    useEffect(() => {
        if(logout){
            console.log("Deconnexion 333");
            firebase.signoutUser()
            .then((result) => {
                props.history.push("/");
                console.log("Home");
            }).catch((err) => {
                
            });

        }
        
    }, [logout]);

    const handleLogout = () => {
        setLogout(true);
        console.log(logout, "déconnexion");
    }
    return (
        
        <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav right className="logout-btn" onClick={handleLogout}>
                <MDBNavItem>
                <Button href="/">Logout</Button>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
            
        
    )
}

export default Logout;


