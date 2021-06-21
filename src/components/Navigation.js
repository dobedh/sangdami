import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/community">자유게시판</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="/profile">프로필</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
