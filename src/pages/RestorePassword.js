// IMPORTACIONES
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// ASSETS
import fondo from '../assets/fondoLogin.png';
import logo from '../assets/logo.svg';

const theme = createMuiTheme({
    typography: { fontFamily: ['Montserrat'].join(','), },
    palette: {
        primary: {
            main: '#FFDD00'
        },
        secondary: {
            main: '#000000'
        }
    }
});

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                TU PAGO
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        width: 200
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: 50
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function RestorePassword() {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);

    let history = useHistory();

    let restore = () => {
        if (email === '') {
            setMessage('Todos los campos son obligatorios');
            setOpen(true);
        } else {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(email).toLowerCase())) {
                setMessage('El correo electrónico no es valido');
                setOpen(true);
            } else {
                axios.post('http://localhost:5000/users/forgot', {
                    "email": email,
                })
                    .then(function (response) {
                        console.log(response);
                        setMessage('Se envió un correo electrónico para continuar con el restablecimiento de su contraseña');
                        setOpenSuccess(true);
                    })
                    .catch(function (error) {
                        console.log(error.response);
                        setMessage(error.response.data.message);
                        setOpen(true);
                    });
            }

        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenSuccess(false);
    };

    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
        history.push('/login');
    };

    return (
        <MuiThemeProvider theme={theme}>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} container direction="column" alignItems="center" justify="center">
                    <Typography variant="h3">
                        <Box fontWeight="fontWeightBold">
                            ¡BIENVENIDO!
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <img src={logo} alt="Logo" className={classes.avatar} />
                        <Typography component="h1" variant="h5">
                            Recupera tu contraseña 
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Correo Electrónico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PersonRoundedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                            <Button
                                onClick={() => { restore() }}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                <Box fontWeight="fontWeightBold">
                                    Recuperar contraseña 
                                </Box>
                            </Button>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
            <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </MuiThemeProvider>
    );
}