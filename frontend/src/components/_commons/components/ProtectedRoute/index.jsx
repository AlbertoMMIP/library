import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../../../../context";

function ProtectedRoute({ component: Component, ...rest }) {
  const [user] = useContext(GlobalContext);
  console.log('Protectes route => ', user );
  return (
    <Route
      {...rest}
      render={props =>
        user._id ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
