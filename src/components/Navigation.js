import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/Login">로그인</Link>
        </li>
        <li>
          <Link to="/Signup">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
