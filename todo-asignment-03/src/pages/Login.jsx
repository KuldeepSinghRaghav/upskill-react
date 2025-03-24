import React, { useState, useEffect } from "react";
import icon from "../../public/icon.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/login/actions";

function Login() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus) {
      navigate("/todo");
      return;
    }
    return;
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dummyEmail = "test@gmail.com";
  const dummyPass = "123456";

  function handleBackClick() {
    // window.history.back();
    navigate("/");
  }

  function handleLogin() {
    if (email === dummyEmail && password === dummyPass) {
      dispatch(login());
      navigate("/todo");
      localStorage.setItem("isLoggedIn", loginStatus);
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
          {/* <div>
            <img className="icon" src={icon} alt="Todo Icon" />
          </div> */}
          <div>
            <h1 style={{ color: "#FF4F5A" }}>Recipes Menu</h1>
          </div>
        </div>
        <div style={{ margin: "5px" }}>
          <h1>Signin</h1>
        </div>
        {/* Conditionally render error message */}
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
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
          className="login-button">
          <b>Login</b>
        </button>
        <button
          onClick={handleBackClick}
          className="back-button"
        >
          <b>back Page</b>
        </button>
      </div>
    </div>
  );
}

export default Login;
