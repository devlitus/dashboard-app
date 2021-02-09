import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const RouterApp = () => {
  const {logged} = useSelector(state => state.auth);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={LoginScreen} isAutenticated={!logged}/>
          <PrivateRoute path="/dashboard" component={DashboardScreen} isAutenticated={logged} />
        </Switch>
      </div>
    </Router>
  );
};
