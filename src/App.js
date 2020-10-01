import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './pages/Landing';
import Login from './pages/Login';
import Registration from './pages/Registration';
import RestorePassword from './pages/RestorePassword';
import UpdatePassword from './pages/UpdatePassword';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registration />
          </Route>
          <Route path="/tablero">
            <Dashboard />
          </Route>
          <Route path="/recuperar-contrasena">
            <RestorePassword />
          </Route>
          <Route path="/actualizar-contrasena">
            <UpdatePassword />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
    </Router>
  );
}