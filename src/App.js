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
import DepositWithdrawal from './pages/DepositWithdrawal';
import SendRequest from './pages/SendRequest';
import Activity from './pages/Activity';
import AcceptRequests from './pages/AcceptRequests';
import Help from './pages/Help';
import Profile from './pages/Profile';
import FinishRegistration from './pages/FinishRegistration';
import RequestPhoneValidation from './pages/RequestPhoneValidation';
import ValidatePhone from './pages/ValidatePhone';
import RequestIdentityValidation from './pages/RequestIdentityValidation';
import AddBankAccount from './pages/AddBankAccount';
import Test from './pages/Test';
import Test2 from './pages/Test2';



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
          <Route path="/inicio">
            <Dashboard />
          </Route>
          <Route path="/recuperar-contrasena">
            <RestorePassword />
          </Route>
          <Route path="/actualizar-contrasena">
            <UpdatePassword />
          </Route>
          <Route path="/depositar-retirar">
            <DepositWithdrawal />
          </Route>
          <Route path="/enviar-solicitar">
            <SendRequest />
          </Route>
          <Route path="/actividad">
            <Activity />
          </Route>
          <Route path="/aceptar-solicitudes">
            <AcceptRequests />
          </Route>
          <Route path="/ayuda">
            <Help />
          </Route>
          <Route path="/perfil">
            <Profile />
          </Route>
          <Route path="/terminar-registro">
            <FinishRegistration />
          </Route>
          <Route path="/solicitar-validacion-telefono">
            <RequestPhoneValidation />
          </Route>
          <Route path="/validar-telefono">
            <ValidatePhone />
          </Route>
          <Route path="/solicitar-verificacion-identidad">
            <RequestIdentityValidation />
          </Route>
          <Route path="/agregar-cuenta-bancaria">
            <AddBankAccount />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/test2">
            <Test2 />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
    </Router>
  );
}