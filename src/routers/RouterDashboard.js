import React from "react";
import { Route, Switch } from "react-router-dom";
import { Categories } from "../components/categories/Categories";
import { Clientes } from "../components/clients/Clientes";
import { Menus } from "../components/menus/Menus";

export const RouterDashboard = () => {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard/categories" component={Categories} />
        <Route exact path="/dashboard/menus" component={Menus} />
        <Route exact path="/dashboard/clientes" component={Clientes} />
      </Switch>
    </>
  );
};
