import React from 'react';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import './App.css';

import {MesDocuments, Default, Navbar, Login, Home,Dashboard, Signup, ForgetPassword} from './Pages';
import UserRoute from './components/UserRoute';

const  App = () => {

    return(
      <React.Fragment>    
            <Navbar/>
        <BrowserRouter>
          <Switch>
            <UserRoute exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/" component={Home}/>  
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/forgetPassword" component={ForgetPassword}/> 
            <Route path="/mesDocuments" component={MesDocuments}/>
            <Route component={Default}/> 

          </Switch>
        </BrowserRouter>     
      </React.Fragment>
    );   
}
export default App;
