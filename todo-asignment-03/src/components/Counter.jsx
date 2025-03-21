import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";
import { login, logout } from "../redux/login/actions";

const Counter = () => {
  // const count = useSelector((state) => state.counter.count);
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // Define the event handlers
  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      {/* <h1>Counter: {count}</h1>
      <button onClick={handleIncrement} style={{ marginRight: "1rem" }}>
        Increment
      </button>
      <button onClick={handleDecrement}>Decrement</button> */}

      <h1>Login: {authStatus ? "Logged In" : "Logged Out"}</h1>
      <button onClick={handleLogin} style={{ marginRight: "1rem" }}>
        login
      </button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Counter;
