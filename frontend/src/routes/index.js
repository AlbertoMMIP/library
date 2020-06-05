import React, { useContext } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "../components/_commons/components/ProtectedRoute";
//import AuthForm from "./components/AuthForm";
import Library from "../components/scenes/Library";
import Home from "../components/scenes/Home";
import AppBar from "../components/_commons/components/AppBar";
import { GlobalContext } from "../context";

function Routes() {
  const [user] = useContext(GlobalContext);
  return (
    <BrowserRouter>
      {user._id &&  <AppBar /> }
      <center>
        <Switch>
          <Route exact component={Home} path="/" />
          {/* <Route
            exact
            component={() => <AuthForm type="login" />}
            path="/login"
          />
          <Route
            exact
            component={() => <AuthForm type="signup" />}
            path="/signup"
          /> */}
          <ProtectedRoute exact component={Library} path="/secret" />
        </Switch>
      </center>
    </BrowserRouter>
  );
}

export default Routes;
