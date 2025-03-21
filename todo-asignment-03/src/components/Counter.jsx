import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/login/actions";

const Counter = () => {
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h1>Login: {authStatus ? "Logged In" : "Logged Out"}</h1>
      <button onClick={handleLogin} style={{ marginRight: "1rem" }}>
        login
      </button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Counter;
