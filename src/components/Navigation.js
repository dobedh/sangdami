import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isLoggedIn }) => {
  return (
    <header>
      <h3 class="logo">
        <a href="/" class="logo-link">
          상다미🙂
        </a>
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="/community" class="link">
              자유게시판
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/profile" class="link">
                프로필
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" class="link">
                  로그인
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
