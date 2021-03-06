import { useSelector } from 'react-redux';
import Logout from "../Pages/Logout/Logout";
import Button from '@material-ui/core/Button';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
  } from "mdbreact";

const Navbar = () => {

      const {currentUser} = useSelector((state) => state.user);
      const isLogged = Boolean(currentUser);

      return (       
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          {/* <strong className="white-text" to="/login">AGIL</strong> */}
          <Button className="white-text" href="/" >AGIL</Button>
          {/* <img src={AGIL}/> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler  />
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>

            <Button href="/">Nos services</Button>
            <Button href="/">Notre fonctionnement</Button>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Mon profil</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Mes missions</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> 
            </MDBNavItem>

            <MDBNavItem>
              {isLogged ?               
                <Logout/> 
              : 
                <MDBNavItem>
                  <Button href="/login">Connexion</Button>
                  <Button href="/signup">Inscription</Button>
                </MDBNavItem>
              }
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>    
        );    
}
export default Navbar;

