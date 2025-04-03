import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./normalize.css";
import "./index.css";
import Login from "./pages/Login";
import Landing from "./components/Landing";
import FindImages from "./pages/FindImages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* //! React Router */}
      {/* Setting up the browser router to handle navigation */}
      <BrowserRouter>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/images" element={<FindImages />} />
        </Routes>
      </BrowserRouter>
      {/* End of React Router setup */}
    </Provider>
  </React.StrictMode>
);
