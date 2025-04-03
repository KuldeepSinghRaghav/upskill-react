import React from "react";
import icon from "../../public/icon.svg";
import "./landingPage.css";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="main">
      <div className="Landing-header">
        <div className="left-side">
          <img className="icon" src={icon} alt="Todo Icon" />
          <h1 style={{ color: "#FF4F5A" }}>Recipes Menu</h1>
        </div>
        {authStatus && (
          <a href="/todo" style={{ color: "#FF4F5A", textDecoration: 'none' }}>
            Home
          </a>
        )}
        {!authStatus && (
          <a href="/login" style={{ color: "#FF4F5A", textDecoration: 'none' }}>
            Login
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
