//!  controlled component: This is a controlled component because it manages the input states (email, password) using React's useState hook.
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/login/actions";

function Login() {
  //! hooks:
  const navigate = useNavigate(); // used for navigation
  //! reduct (useSelector & useDispatch)
  // to access the authentication status from the redux store
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  // to send actions to redux
  const dispatch = useDispatch();
  //! useRef :
  // to get direct access to a DOM node or React element
  const emailInputRef = useRef(null);
  //! useEffect :
  // for performing side effects in functional components
  useEffect(() => {
    if (authStatus) {
      navigate("/todo");
      return;
    }
    emailInputRef.current.focus();
  }, []);
  // ! use state :
  // to manage the states.
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
    if (!email) {
      setErrorMessage("Email is required!");
      return;
    }
    if (!password) {
      setErrorMessage("Password is required!");
      return;
    }
    if (email === dummyEmail && password === dummyPass) {
      dispatch(login());
      navigate("/todo");
      // localStorage.setItem("isLoggedIn", loginStatus);
    } else {
      setErrorMessage(" Login Creds are not correct !");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-side">
          <div>
            <h1 style={{ color: "#FF4F5A" }}>Recipes Menu</h1>
          </div>
        </div>
        <div className="signin-header">
          <h1>Signin</h1>
        </div>
        <input
          className="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          ref={emailInputRef}
          style={{ outline: "none" }}
        />
        <input
          className="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ outline: "none" }}
        />
        {/* Conditionally render error message */}
        {errorMessage && (
          <div style={{ color: "red", marginLeft: "2px" }}>{errorMessage}</div>
        )}
        {/* //!Event Handling */}
        <button onClick={handleLogin} className="login-button">
          <b>Login</b>
        </button>
        <button onClick={handleBackClick} className="back-button">
          <b>Back Page</b>
        </button>
      </div>
    </div>
  );
}

export default Login;
