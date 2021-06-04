import React, { useState } from "react";
import { firebaseInstance, authService, db } from "../fbase";

function App() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      target: { email, password },
    } = event;
    setEmail(email.value);
    setPassword(password.value);
    await authService.createUserWithEmailAndPassword(userEmail, userPassword);
  };

  const onChange = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h3> 상다미 :) </h3>
      <form onSubmit={onSubmit}>
        <input
          type="eamil"
          name="email"
          placeholder="Eamil"
          onChange={onChange}
        />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="로그인" />
      </form>
      <button>페이스북 로그인</button>
      <button>구글 로그인</button>
    </div>
  );
}

export default App;
