import React, { useState } from "react";
import icon from "../../public/icon.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dummyEmail = "test@gmail.com";
  const dummyPass = "123456";
  const navigate = useNavigate();

  function handleBackClick() {
    window.history.back();
  }

  function handleLogin() {
    if (email === dummyEmail && password === dummyPass) {
      navigate("/todo");
    } else {
      setErrorMessage(" Login Creds are not correct !");
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "512px",
          height: "533px",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <div className="left-side">
          <div>
            <img className="icon" src={icon} alt="Todo Icon" />
          </div>
          <div>
            <h1 style={{ color: "#FF4F5A" }}>Todo Daily</h1>
          </div>
        </div>
        <div style={{ margin: "5px" }}>
          <h1>Signin</h1>
        </div>
        {/* Conditionally render error message */}
        {errorMessage && ( 
          <div style={{ color: "red" }}>
            {errorMessage}
          </div>
        )}
        <input
          className="email-input"
          style={{ padding: "10px", marginTop: "60px", margin: "2px" }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          style={{ padding: "10px", margin: "2px" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px",
            margin: "2px",
            marginTop: "20px",
            backgroundColor: "#FF4F5A",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
        >
          <b>Login</b>
        </button>
        <button
          style={{
            padding: "10px",
            margin: "2px",
            backgroundColor: "#FF4F5A",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
          onClick={handleBackClick}
        >
          <b>back Page</b>
        </button>
      </div>
    </div>
  );
}

export default Login;
