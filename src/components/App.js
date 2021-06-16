import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import { firebaseInstance, authService, db } from "../fbase";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Navigation from "./Navigation";
import AppRouter from "./Router";

function App() {
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
    });
  }, []);
  return (
    <div className="App">
      <h3> 상다미 :) </h3>
      <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} />
    </div>
  );
}

export default App;
