import React, { useState, useEffect, useContext} from 'react';
//import {Switch,Route} from "react-router-dom";
import {Link} from "react-router-dom";
import { FirebaseContext } from "../../Firebase";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
const  Login = (props) => {

    const classes = useStyles(); 

    /* on récupère les methods de firebase.js grace UseContext
     loginUser la mthode d'ont j'ai besoin  */
    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btn, setbtn] = useState(false);
    const [error, setError] = useState("");

    // [] tableau vide veut dire que le useEffect va se dclancher qu'une seule fois, c'est l'quivalent de componentDidmount
    useEffect(() => {
        if(password.length > 5 && email !== ""){
            setbtn(false)
        } else if (btn) {
            setbtn(true) // permet de disabeled le button quand la conditon n'est pas respecter une 2 ème fois
        }
    }, [password, email, btn])// [password, email, btn] represent la dpendence

    const handleSubmit = e => {
 
        e.preventDefault(); // éviter le rechargement de la page, sinon on risque de perdre les valeurs qu'on a dans les variables d'états
        console.log(email, password);

        firebase.loginUser(email, password)
        .then(user => { // .then c'es tla rpense de loginUser qui veut dire qu'on a réusi à ce connecter 
            console.log(email, password);
            props.history.push("/dashboard");
            setEmail("");
            setPassword("");
        })
        .catch(error => {
            // vider les champs quand la personne se trompe pour qu'elle puisse tenter de se connecter
            setError(error);
            setEmail("");
            setPassword("");

        })
    }

        // gestion des erreurs
        //const errorMessage = error !== '' && <span>{error.message}</span>;

        const disabled = email === "" || password === "";
        return(
            
            
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    
                    </Avatar>
                    
                    <Typography component="h1" variant="h5">
                    Connexion
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled = {disabled}
                    >
                        Se connecter
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link 
                            to="/forgetPassword"
                            href="#" 
                            variant="body2">
                            Mot de passe oublié ?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link 
                            to="/signup"
                            href="#" 
                            variant="body2">
                            {"Pas encore inscrit ? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container>
            
        )
}


export default Login;

/* <div >

                <form className="signUpLoginBox">
                    <input onChange={(e) => setEmail(e.target.value)} id="email" name='email' placeholder='email'/>
                    <input onChange={(e) => setPassword(e.target.value)} id="password" name='password' placeholder='password'/>
                    
                    <input onClick={handleSubmit} type="submit" value="Submit" />
                    
                </form>   
            </div> */



