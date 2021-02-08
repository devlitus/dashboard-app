import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./dashboard-app.css";
import { RouterApp } from "./routers/RouterApp";

export const DashboardApp = () => {
  return (
    <Provider store={store}>
      <RouterApp />;
    </Provider>
  );
};
