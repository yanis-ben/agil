import React from 'react';
import Button from '@material-ui/core/Button';
import {MDBNavbarNav , MDBNavItem, MDBCollapse} from "mdbreact";
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../../redux/actions/actions';

const Logout = () => {

    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
       if(currentUser){
           dispatch(logoutInitiate())
       }
        console.log("déconnexion");
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


