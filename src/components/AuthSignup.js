import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

const AuthSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMsg, setErorrMsag] = useState(null);
  const history = useHistory();

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "password2") {
      setPassword2(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (password === password2) {
      try {
        await authService.createUserWithEmailAndPassword(email, password);
        history.push("/nickname");
      } catch (error) {
        setErorrMsag(error.message);
        console.log(error);
      }
    } else {
      setErorrMsag("패스워드가 일치하지 않습니다!");
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
        <input
          type="password"
          name="password2"
          placeholder="Type Password Again"
          onChange={onChange}
          value={password2}
        />
        <input type="submit" value="회원가입" />
      </form>
      <button onClick={onFacebookLoginClick}>페이스북으로 시작하기</button>
      <button onClick={onGoogleLoginClick}>구글로 시작하기</button>
      {errorMsg ? <div>{errorMsg}</div> : <></>}
    </div>
  );
};

export default AuthSignup;
