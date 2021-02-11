import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isAutenticated: isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};
PublicRoute.propType = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
