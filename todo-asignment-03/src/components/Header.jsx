import React from "react";
import icon from "../../public/icon.svg";
import "./landingPage.css";


function Header() {
  return (
    <div className="main">
      <div className="Landing-header">
        <div className="left-side">
          <img className = "icon" src={icon} alt="Todo Icon" />
          <h1 style={{ color: "#FF4F5A" }}>Todo daily</h1>
        </div>
        <a rel="stylesheet" href="login.css" style={{ color: "#FF4F5A" }}>
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
