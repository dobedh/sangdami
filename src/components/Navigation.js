import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isLoggedIn }) => {
  return (
    <header>
      <h3 class="logo">
        <a href="/" class="logo-link">
          μλ€λ―Έπ
        </a>
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="/community" class="link">
              μμ κ²μν
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/profile" class="link">
                νλ‘ν
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" class="link">
                  λ‘κ·ΈμΈ
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
