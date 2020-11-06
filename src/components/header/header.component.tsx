import React from "react";
import "./header.styles.scss";

function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="logo">
        <a href="">
          🏠 <span>CodeHouse</span> 🏠
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
