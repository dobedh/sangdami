import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Navigation from "./Navigation";
import Posts from "../routes/Posts";
import Community from "./Community";

const AppRouter = ({ userObj, isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} />
      <Route excat path="/community">
        <Community userObj={userObj} />
      </Route>
      <Route excat path="/post">
        <Posts userObj={userObj} />
      </Route>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
