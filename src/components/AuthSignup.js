import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

const AuthSignup = () => {
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
      await authService.createUserWithEmailAndPassword(email, password);
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
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
        <input type="submit" value="회원가입" />
      </form>
      <button onClick={onFacebookLoginClick}>페이스북으로 시작하기</button>
      <button onClick={onGoogleLoginClick}>구글로 시작하기</button>
    </div>
  );
};

export default AuthSignup;
