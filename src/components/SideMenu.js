import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import iconoInicio from '../assets/iconoInicio.svg';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import avatar from '../assets/avatar.jpg';

class SideMenu extends React.Component {
    render() {
        return (
            <div>
                <Box style={{ width: '100%', height: 220, backgroundColor: 'white', display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box boxShadow={3} style={{ width: '60%', height: 40, backgroundColor: '#FFDD00', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
                        <Typography component="h1">
                            MENU
                        </Typography>
                    </Box>
                    <Box style={{ width: 100, height: 100, backgroundColor: 'blue', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                    <img src={avatar} alt="Avatar" style={{width: 100, height: 100}} />
                    </Box>
                    <Box boxShadow={3} style={{ width: '80%', height: 40, backgroundColor: '#F2F2F2', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginBottom: 10 }}>
                        <Typography component="h1">
                           {this.props.userShow.firstName} {this.props.userShow.lastName}
                        </Typography>
                    </Box>
                </Box>
                {this.props.select == "Inicio"
                    ? (
                        <ListItem button component="a" href="/inicio" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Inicio" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                    : (
                        <ListItem button component="a" href="/inicio" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Inicio" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                }
                <Divider />
                {this.props.select == "DepositarRetirar"
                    ? (
                        <ListItem button component="a" href="/depositar-retirar" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Depositar / Retirar" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                    : (
                        <ListItem button component="a" href="/depositar-retirar" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Depositar / Retirar" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                }
                <Divider />
                {this.props.select == "EnviarSolicitar"
                    ? (
                        <ListItem button component="a" href="/enviar-solicitar" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Enviar / Solicitar" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                    : (
                        <ListItem button component="a" href="/enviar-solicitar" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Enviar / Solicitar" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                }
                <Divider />
                {this.props.select == "Actividad"
                    ? (
                        <ListItem button component="a" href="/actividad" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Actividad" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                    : (
                        <ListItem button component="a" href="/actividad" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Actividad" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                }
                <Divider />
                {this.props.select == "AceptarSolicitudes"
                    ? (
                        <ListItem button component="a" href="/aceptar-solicitudes" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Aceptar solicitudes" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                    : (
                        <ListItem button component="a" href="/aceptar-solicitudes" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Aceptar solicitudes" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                }
                <Divider />
                {this.props.select == "Ayuda"
                    ? (
                        <ListItem button component="a" href="/ayuda" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Ayuda" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                    : (
                        <ListItem button component="a" href="/ayuda" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Ayuda" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                }
                <Divider />
                {/* {this.props.select == "CerrarSesion"
                    ? (
                        <ListItem button component="a" href="/login" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Cerrar sesión" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                    : (
                        <ListItem button component="a" href="/login" style={{ height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent' }}>
                            <ListItemIcon style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
                                <div style={{ height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10 }}></div>
                                <div style={{ height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <img src={iconoInicio} style={{ height: 24, width: 24 }} />
                                </div>
                            </ListItemIcon>
                            <ListItemText primary="Cerrar sesión" style={{ height: 50, paddingTop: 15 }} />
                        </ListItem>
                    )
                } */}
            </div>
        )
    }
}

export default SideMenu