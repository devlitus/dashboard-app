import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {login} from '../actions/auth';
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const RouterApp = () => {
  const {logged} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
  }, [dispatch])
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={LoginScreen} isAutenticated={logged}/>
          <PrivateRoute path="/dashboard" component={DashboardScreen} isAutenticated={logged} />
        </Switch>
      </div>
    </Router>
  );
};
