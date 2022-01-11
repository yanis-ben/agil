import React, {useState, useContext} from "react";
import { FirebaseContext } from "../../Firebase";
import {Link} from "react-router-dom";

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

const Signup = (props) => {

    const classes = useStyles(); 

    // on récupère les methods de firebase.js grace au context
    const firebase = useContext(FirebaseContext);
    console.log(firebase);

    const [firstName, setFirstName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [btn, setbtn] = useState(false);


    const [error, setError] = useState("");


    const handleSubmit = e => {
 
        e.preventDefault(); // éviter le rechargement de la page, sinon on risque de perdre les valeurs qu'on a dans les variables d'états
        console.log(firstName, lastname, email, password);

        firebase.loginUser(firstName, lastname, email, password, confirmPassword)
        .then(user => { // .then c'est la répense de loginUser qui veut dire qu'on a réusi à se connecter 
            console.log(firstName, lastname, email, password);
            props.history.push("/dashboard");
            setFirstName("");
            setLastname("");
            setEmail("");
            setPassword("");
        })
        .catch(error => {
            // vider les champs quand la personne se trompe pour qu'elle puisse tenter de se connecter
            setError(error);
            setFirstName("");
            setLastname("");
            setEmail("");
            setPassword("");

        })
    }
    
    const disabled = email === "" || password === "";
    return (

        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            
            </Avatar>
            
            <Typography component="h1" variant="h5">
            Inscription
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="firstName"
                name="firstName"
                autoComplete="firstName"
                autoFocus
            />
            <TextField
                onChange={(e) => setLastname(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="lastName"
                name="lastName"
                autoComplete="lastName"
                autoFocus
            />
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
            <TextField
                onChange={(e) => setConfirmPassword(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirm password"
                label="confirm password"
                type="confirm password"
                id="confirmPassword"
                autoComplete="current-confirmPassword"
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
                Inscription
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
export default Signup;


{/* <div className="signUpLoginBox">

<div className="formBoxSignUp">
    <div className="formContent">

        {errorMessage}

        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>                        
            <div className="inpuBox">
                <input onChange={handleChange} value={firstName} type="text" id="firstName" autoComplete="off" required/>
                <label htmlFor="firstName">First Name</label>
            </div>

            <div className="inpuBox">
                <input onChange={handleChange} value={lastName} type="text" id="lastName" autoComplete="off" required/>
                <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="inpuBox">
                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                <label htmlFor="email">Email</label>
            </div>

            <div className="inpuBox">
                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                <label htmlFor="password">Password</label>
            </div>

            <div className="inpuBox">
                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required/>
                <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            {btn}
        </form>
        <div className="linkContainer">
            <Link className="simpleLink" to="/login">Déjà inscrit ? connectez-vous.</Link>
        </div>
    </div>
</div>
</div> */}