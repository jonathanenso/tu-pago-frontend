import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import iconoInicio from '../assets/iconoInicio.svg';

export const mainListItems = (
  <div>
    <ListItem button style={{height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: '#F2F2F2'}}>
      <ListItemIcon style={{alignItems: 'center', backgroundColor: '#F2F2F2'}}>
        <div style={{height: 50, width: 10, backgroundColor: '#FFDD00', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10}}></div>
        <div style={{height: 32, width: 32, backgroundColor: '#FFDD00', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={iconoInicio} style={{height: 24, width: 24}} />
        </div>
      </ListItemIcon>
      <ListItemText primary="Inicio" style={{height: 50, paddingTop: 15}}/>
    </ListItem>
    <Divider />
    <ListItem button style={{height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent'}}>
      <ListItemIcon style={{alignItems: 'center', backgroundColor: 'transparent'}}>
        <div style={{height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10}}></div>
        <div style={{height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={iconoInicio} style={{height: 24, width: 24}} />
        </div>
      </ListItemIcon>
      <ListItemText primary="Depositar / Retirar" style={{height: 50, paddingTop: 15}}/>
    </ListItem>
    <Divider />
    <ListItem button style={{height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent'}}>
      <ListItemIcon style={{alignItems: 'center', backgroundColor: 'transparent'}}>
        <div style={{height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10}}></div>
        <div style={{height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={iconoInicio} style={{height: 24, width: 24}} />
        </div>
      </ListItemIcon>
      <ListItemText primary="Enviar / Solicitar" style={{height: 50, paddingTop: 15}}/>
    </ListItem>
    <Divider />
    <ListItem button style={{height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent'}}>
      <ListItemIcon style={{alignItems: 'center', backgroundColor: 'transparent'}}>
        <div style={{height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10}}></div>
        <div style={{height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={iconoInicio} style={{height: 24, width: 24}} />
        </div>
      </ListItemIcon>
      <ListItemText primary="Actividad" style={{height: 50, paddingTop: 15}}/>
    </ListItem>
    <Divider />
    <ListItem button style={{height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent'}}>
      <ListItemIcon style={{alignItems: 'center', backgroundColor: 'transparent'}}>
        <div style={{height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10}}></div>
        <div style={{height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={iconoInicio} style={{height: 24, width: 24}} />
        </div>
      </ListItemIcon>
      <ListItemText primary="Aceptar solicitudes" style={{height: 50, paddingTop: 15}}/>
    </ListItem>
    <Divider />
    <ListItem button style={{height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent'}}>
      <ListItemIcon style={{alignItems: 'center', backgroundColor: 'transparent'}}>
        <div style={{height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10}}></div>
        <div style={{height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={iconoInicio} style={{height: 24, width: 24}} />
        </div>
      </ListItemIcon>
      <ListItemText primary="Ayuda" style={{height: 50, paddingTop: 15}}/>
    </ListItem>
    <Divider />
    <ListItem button style={{height: 50, borderTopRightRadius: 25, borderBottomRightRadius: 25, padding: 0, backgroundColor: 'transparent'}}>
      <ListItemIcon style={{alignItems: 'center', backgroundColor: 'transparent'}}>
        <div style={{height: 50, width: 10, backgroundColor: 'transparent', borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 10}}></div>
        <div style={{height: 32, width: 32, backgroundColor: '#ECECEC', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={iconoInicio} style={{height: 24, width: 24}} />
        </div>
      </ListItemIcon>
      <ListItemText primary="Cerrar sesión" style={{height: 50, paddingTop: 15}}/>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);