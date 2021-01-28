import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Login } from "../components/login/Login";

export const RouterApp = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
};
