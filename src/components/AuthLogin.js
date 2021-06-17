import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const onGoogleLoginClick = (event) => {
    const googleProvider = new authService.GoogleAuthProvider();
  };

  const onFacebookLoginClick = (event) => {
    const googleProvider = new authService.FacebookAuthProvider();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="eamil"
          name="email"
          placeholder="Eamil"
          onChange={onChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
        <input type="submit" value="로그인" />
      </form>
      <button onClick={onFacebookLoginClick}>페이스북 로그인</button>
      <button onClick={onGoogleLoginClick}>구글 로그인</button>
    </div>
  );
};

export default AuthLogin;
