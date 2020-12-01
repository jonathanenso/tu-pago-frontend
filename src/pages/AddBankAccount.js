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
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import { userActions } from '../actions';
import SideMenu from '../components/SideMenu';

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
    fixedHeight: {
        height: 500,
    },
}));

export default function AddBankAccount() {
    const classes = useStyles();
    const userShow = useSelector(state => state.authentication.user);


    const [holder, setHolder] = useState('');
    const [document, setDocument] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const adding = useSelector(state => state.users.adding);
    const success = useSelector(state => state.users.addSuccess);



    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [birthday, setBirthday] = useState('');
    // const [document, setDocument] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();



    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let add = () => {
        if (holder === '' || document === '' || accountNumber === '' ) {
            setMessage('Todos los campos son obligatorios');
            setOpen(true);
        } else {
            dispatch(userActions.addAccount(userShow.id, {
                "holder": holder,
                "document": document,
                "accountNumber": accountNumber,
            }));
        }
    }

    useEffect(() => {
        if(success){
            history.push('/inicio');
        }
    }, [success]);

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
                                <Paper className={fixedHeightPaper}>
                                    <Typography component="h1" variant="h5">
                                        FINALIZAR REGISTRO
                        </Typography>
                                    <form className={classes.form} noValidate>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            id="account-holder"
                                            label="Titular de la cuenta"
                                            name="account-holder"
                                            autoComplete="account-holder"
                                            autoFocus
                                            size="small"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <PersonRoundedIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onChange={(event) => { setHolder(event.target.value) }}
                                        />
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="document"
                                            label="Documento de identidad"
                                            type="document"
                                            id="document"
                                            autoComplete="document"
                                            size="small"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <PersonRoundedIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onChange={(event) => { setDocument(event.target.value) }}
                                        />
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="account-number"
                                            label="Numero de cuenta"
                                            id="account-number"
                                            autoComplete="account-number"
                                            size="small"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <PersonRoundedIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onChange={(event) => { setAccountNumber(event.target.value) }}
                                        />
                                        {adding ? (
                                            <Button
                                                onClick={() => { add() }}
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                style={{ marginTop: 20 }}
                                            >
                                                <CircularProgress color="secondary" />
                                            </Button>
                                        ) : (
                                                <Button
                                                    onClick={() => { add() }}
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                    style={{ marginTop: 20 }}
                                                >
                                                    <Box fontWeight="fontWeightBold">
                                                        Finalizar registro
                                        </Box>
                                                </Button>
                                            )}
                                    </form>
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