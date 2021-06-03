import React from "react";
import { firebaseInstance, authService, db } from "../fbase";

function App() {
  return (
    <div className="App">
      <h3>상다미 :) </h3>
      <form>
        <input type="eamil" placeholder="Eamil" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="로그인" />
      </form>
      <button>페이스북 로그인</button>
      <button>구글 로그인</button>
    </div>
  );
}

export default App;
