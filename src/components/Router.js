import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({ userObj, isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/">
            <Home userObj={userObj} />
          </Route>
        ) : (
          <Route excat path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
