import React, {useState, useContext} from 'react'
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
import {Link} from "react-router-dom";



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

const ForgetPassword = props => {
    const classes = useStyles(); 

    /* on récupère les methods de firebase.js grace UseContext
     loginUser la mthode d'ont j'ai besoin  */
    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setError(null);//vider la variable si jamais le user a déjà fait une tentative
            setSuccess('Consulter votre adresse email');
            setEmail("");

            setTimeout(() => {
                props.history.push("/login")
            }, 500)
        })
        .catch( error => {
            setError(error);
            setEmail("");
        })
    }
    
    // si email er != de "" disabeled devient false
    const disabled = email === "";

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            
            </Avatar>
            {success && <span>{success}</span>}

            {error && <span>{error.message}</span>}
            <Typography component="h1" variant="h5">
            mot de passe oublié 
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
                disabled={disabled}
            >
                Récupérer le mot de pass
            </Button>
            <Grid container>
                <Grid item xs>
                
                </Grid>
                <Grid item>
                <Link 
                    to="/login"
                    href="#" 
                    variant="body2">
                    {"Déjà inscrit ? Connectez-vous"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
    </Container>
    )
}

export default ForgetPassword
