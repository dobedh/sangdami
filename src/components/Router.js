import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Signup from "../routes/Signup";
import Login from "../routes/Login";
import Navigation from "./Navigation";
import Posts from "../routes/Posts";
import Community from "./Community";
import Nickname from "../routes/Nickname";
import Contents from "../routes/Contents";

const AppRouter = ({ userObj, isLoggedIn }) => {
  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} />
      <Route exact path="/community/:id" component={Contents}></Route>
      <Route exact path="/community">
        <Community userObj={userObj} />
      </Route>
      <Route exact path="/post">
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
            <Route exact path="/nickname">
              <Nickname userObj={userObj} />
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
