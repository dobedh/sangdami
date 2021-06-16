import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Auth";
import Home from "../routes/Home";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Navigation from "./Navigation";

const AppRouter = ({ userObj, isLoggedIn }) => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home userObj={userObj} />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
