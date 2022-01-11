import React, { useState } from 'react';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import './App.css';

import {MesDocuments, Default, Navbar, Login, Home,Dashboard, Signup, ForgetPassword} from './Pages';


// Switch sert à définir des route

// comment afficher les routes personnelles(mesdocuments) privées après le login

// dans app affiché que les routes publics <Route exact path="/" component={Accueil}/>   
const  App = () => {

  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN"); 
  const [user, setUser] = useState({});

 const  handleLogin = (data) => {
    setLoggedInStatus("LOGGED_IN");
    setUser(data);
  }

  
    return(
      <React.Fragment>
            
            <Navbar/>
        <BrowserRouter>
          <Switch>
          <Route 
            exact
            path="/" 
            render={props => (
              <Home {...props} handleLogin={handleLogin} />
            )}
            />  
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/fo rgetPassword" component={ForgetPassword}/>
     
            <Route path="/mesDocuments" component={MesDocuments}/>

            <Route  
            exact 
            path={"/dashboard"} 
            render={props => (
              <Dashboard {...props} handleLogin={handleLogin} loggedInStatus={loggedInStatus}/>
            )}
            />
            <Route component={Default}/> 

          </Switch>
        </BrowserRouter>
        
      </React.Fragment>
    );
        
}

export default App;
