import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenser <i class="fi-rr-credit-card"></i>{" "}
          <i class="fa fa-credit-card"></i>
        </div>
        <div className="header-button">
          <a
            href="https://github.com/imravi20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original"></i>star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
