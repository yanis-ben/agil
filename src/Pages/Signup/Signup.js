import React, {useState, useContext, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseContext } from "../../Firebase";
import {useHistory, Link} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { registerInitiate } from "../../redux/actions/actions";

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

const Signup = () => {

    const classes = useStyles(); 

    // on récupère les methods de firebase.js grace au context
    const firebase = useContext(FirebaseContext);
    console.log(firebase);

  const [state, setState] = useState({
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
  })

  const {displayName, email, password,  passwordConfirm} = state;
  const {currentUser} = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
      if(currentUser){
          history.push("/dashboard")
      }

  }, [currentUser, history])

  const dispatch = useDispatch();

    const handleSubmit = e => {
 
        e.preventDefault();
        console.log("infos : ", displayName, email, password, passwordConfirm);

        // if(password !== passwordConfirm){
        //     return;
        // }
        dispatch(registerInitiate(email, password));
        setState({displayName: "", email: "", password: "", passwordConfirm: ""})
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});    
    }
    
    //const disabled = email === "" || password === "" || displayName === "" || passwordConfirm === "";
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar> 
            <Typography component="h1" variant="h5">Inscription</Typography>
            
            <form className={classes.form} noValidate>
            <TextField
                onChange={handleChange}
                value={displayName}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
            />
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
            <TextField
                onChange={handleChange}
                value={passwordConfirm}
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