import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Navigation from "./Navigation";

const AppRouter = ({ userObj, isLoggedIn }) => {
  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Home userObj={userObj} />
        </Route>
        {isLoggedIn ? (
          <p> hello</p>
        ) : (
          <>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
