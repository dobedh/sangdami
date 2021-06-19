import React, { useEffect, useState } from "react";
import { authService } from "../fbase";
import AppRouter from "./Router";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <>
          <h3>상다미 :)</h3>
          <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} />
        </>
      ) : (
        "is logging..."
      )}
    </>
  );
}

export default App;
