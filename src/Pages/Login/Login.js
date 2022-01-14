import React, { useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { googleSignInInitiate, loginInitiate } from '../../redux/actions/actions';

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
  
const  Login = () => {

    const classes = useStyles(); 

    const [state, setState] = useState({
        email: "",
        password:""
    });

    const {email, password} = state;
    const {currentUser} = useSelector((state) => state.user);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(currentUser){
            history.push("/dashboard")
        }

    }, [currentUser, history])

    const handleSubmit = e => {
 
        e.preventDefault();
        console.log(email, password);

        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({email: "", password: ""});
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});    
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
    }

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
                    <div className='social-login'>
                        <button className='="btn google-btn social-btn' type="button" onClick={handleGoogleSignIn}>
                            <span>
                                <i className='fab fa-google-plus-g'></i> Sign in with Google
                            </span>
                        </button>
                    </div>
                    <form className={classes.form} noValidate>
                    <TextField
                        onChange={handleChange}
                        value={email}
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
                        onChange={handleChange}
                        value={password}
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




