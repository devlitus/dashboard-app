import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Dashboard";
import { LoginScreen } from '../components/login/LoginScreen';

export const RouterApp = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
};
