import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { userActions } from '../actions';
import SideMenu from '../components/SideMenu';
import imagenSobre from '../assets/imagenSobre.png';
import iconoInicio from '../assets/iconoInicio.svg';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import pasaporte from '../assets/pasaporte.svg';
import licencia from '../assets/licencia.svg';
import Alert from '@material-ui/lab/Alert';

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
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    submit: {
        borderRadius: 50
    }
}));

export default function RequestIdentityValidation() {

    const classes = useStyles();
    const userShow = useSelector(state => state.authentication.user);
    const uploading = useSelector(state => state.users.uploading);
    const success = useSelector(state => state.users.success);

    const [passport, setPassport] = useState(null);
    const [document, setDocument] = useState(null);
    const [license, setLicense] = useState(null);

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    /**
     * Cargar los arhivos seleccionados
     */
    let upload = () => {

        //Si no hay documentos seleccionados
        if(!document && !passport && !license ){
            setError(true);
            if(idTimeOut){
                window.clearTimeout(idTimeOut);
            }
            let id = window.setTimeout(()=>{setError(false)},5000); 
            setIdTimeOut(id);
            return;
        }

        var formData = new FormData();

        if(document){
            formData.append('documents', document);
        }

        if(passport){
            formData.append('documents', passport);
        }

        if(passport){
            formData.append('documents', license);
        }
        dispatch(userActions.uploadDocument(userShow.id,formData));
    }

    //Manejo de alertas
    const alert = useSelector(state => state.alert);
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
        setError(false);
        //limpiar timeouts
        if(idTimeOut){
            window.clearTimeout(idTimeOut);
        }
    }
    const [idTimeOut, setIdTimeOut] = useState(null);

    useEffect(() => {
        if(alert.message){
            setVisible(true);
            if(idTimeOut){
                window.clearTimeout(idTimeOut);
            }
            let id = window.setTimeout(()=>{setVisible(false)},5000); 
            setIdTimeOut(id);
        }
    },[alert]);

    //Resetear campos
    useEffect(() => {
        if(success === true){
            setPassport(null);
            setDocument(null);
            setLicense(null);
        }
    },[success]);

    const [error, setError] = useState(false);

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Perfil
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <SideMenu userShow={userShow}></SideMenu>
                    <Divider />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12}>
                                <Paper className={fixedHeightPaper} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography component="h1" variant="h5" style={{ backgroundColor: 'white' }}>
                                        VERIFICACIÓN DE IDENTIDAD
                                    </Typography>
                                    <Typography  style={{ backgroundColor: 'white' }}>
                                        Selección el tipo de documento que desea subir
                                    </Typography>
                                    {(alert.message && visible) &&
                                        <Alert severity={alert.type} variant="filled" onClose={onDismiss}>{alert.message}</Alert>
                                    }
                                    {error &&
                                        <Alert severity="error" variant="filled" onClose={onDismiss}>No se ha seleccionado ningún archivo</Alert>
                                    }
                                    <label htmlFor="contained-button-passport" style={{width: '100%', marginTop: 25}}>
                                        <ListItem button htmlFor="contained-button-passport" style={{ height: 50, borderRadius: 25, padding: 0, backgroundColor: '#F2F2F2', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Box style={{width: 40, height: 40, backgroundColor: '#FFDD00', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                                                <img src={pasaporte} style={{ height: 24, width: 24 }} />
                                            </Box>
                                            <Typography  style={{ backgroundColor: 'transparent', marginLeft: 20 }}>
                                                PASAPORTE {passport && (passport.name)} {!passport && ('(Subir página del pasaporte donde esté su foto)')}
                                            </Typography>
                                    </ListItem>
                                    </label>
                                    <label htmlFor="contained-button-document" style={{width: '100%', marginTop: 25}}>
                                        <ListItem button htmlFor="contained-button-document" style={{ height: 50, borderRadius: 25, padding: 0, backgroundColor: '#F2F2F2', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Box style={{width: 40, height: 40, backgroundColor: '#FFDD00', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                                                <img src={pasaporte} style={{ height: 24, width: 24 }} />
                                            </Box>
                                            <Typography  style={{ backgroundColor: 'transparent', marginLeft: 20 }}>
                                                CEDÚLA DE IDENTIDAD {document && (document.name)} {!document && ('(Subir frente del documento de identidad)')}
                                            </Typography>
                                    </ListItem>
                                    </label>

                                    <label htmlFor="contained-button-license" style={{width: '100%', marginTop: 25}}>
                                        <ListItem button htmlFor="contained-button-license" style={{ height: 50, borderRadius: 25, padding: 0, backgroundColor: '#F2F2F2', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Box style={{width: 40, height: 40, backgroundColor: '#FFDD00', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                                                <img src={licencia} style={{ height: 24, width: 24 }} />
                                            </Box>
                                            <Typography  style={{ backgroundColor: 'transparent', marginLeft: 20 }}>
                                            LICENCIA DE CONDUCIR {license && (license.name)} {!license && ('(Subir frente de la licencia de conducir)')}
                                    </Typography>
                                    </ListItem>
                                    </label>


                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-passport"
                                        type="file"
                                        onChange={(event) => { setPassport(event.target.files[0]) }}
                                    />

                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-document"
                                        type="file"
                                        onChange={(event) => { setDocument(event.target.files[0]) }}
                                    />

                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-license"
                                        type="file"
                                        onChange={(event) => { setLicense(event.target.files[0]) }}
                                    />

                                    <Box style={{ backgroundColor: '#20F282', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 25}}>
                                    <Typography  style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                        Documento seleccionado                                    
                                    </Typography>
                                    </Box>
                                   
                                    <Button
                                        onClick={() => { upload() }}
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        style={{ marginTop: 20 }}
                                        disabled={uploading}
                                    >
                                        {uploading && <CircularProgress color="secondary" size="1rem" style={{ marginRight: 2 }}/>}
                                        <Box fontWeight="fontWeightBold">
                                            Enviar
                                        </Box>
                                    </Button>
                                    
                                </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>
            </div>
        </MuiThemeProvider>
    );
}