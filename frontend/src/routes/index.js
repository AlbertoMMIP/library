import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "../components/scenes/Login";
import Register from "../components/scenes/Register";
import Library from "../components/scenes/Library";
import Users from "../components/scenes/Users";
import Profile from "../components/scenes/Profile";
import AppBar from "../components/_commons/components/AppBar";
import ProtectedRoute from "../components/_commons/components/ProtectedRoute";

function Routes() {
  return (
    <BrowserRouter>
      <AppBar />
      <center>
        <Switch>
          <Route exact component={Library} path="/" />
          <Route exact component={Library} path="/books" />
          <Route exact component={Login}   path="/login" />
          <Route exact component={Users}   path="/users" />
          <Route exact component={Profile} path="/profile" />
          <Route exact component={() => <Register type="user" />} path="/registerUser"/>
          <Route exact component={() => <Register type="book" />} path="/registerBook"/>
          <ProtectedRoute exact component={Library} path="/secret" />
        </Switch>
      </center>
    </BrowserRouter>
  );
}

export default Routes;
