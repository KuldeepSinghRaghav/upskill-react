import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StyleComponent from "./StyleComponent.jsx";
import Hooks from "./Hooks.jsx";
import Memo from "./Memo.jsx";
import NewPageButton from "./NewPageButton.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hooks />
    <StyleComponent />
    <Memo />
    <NewPageButton />
  </StrictMode>
);
