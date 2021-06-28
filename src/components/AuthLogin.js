import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();
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
      history.push("/");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const onGoogleLoginClick = (event) => {
    const googleProvider = new authService.GoogleAuthProvider();
    console.log(googleProvider);
  };

  const onFacebookLoginClick = (event) => {
    const googleProvider = new authService.FacebookAuthProvider();
    console.log(googleProvider);
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
      {errorMessage ? <div>{errorMessage} </div> : <div></div>}
    </div>
  );
};

export default AuthLogin;
