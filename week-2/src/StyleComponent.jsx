import React, { useState, useEffect } from "react";
import "./index.css";
import styled from "styled-components";

function StyleComponent() {
  const Button = styled.button`
    color: white;
    padding: 15px;
    border: 3px solid black;
    background: gray;
    &:hover {
      background-color: lightblue;
      color: black;
    }
  `;

  const ButtonB = styled.button`
    color: white;
    padding: 15px;
    border: 3px solid red;
    background: gray;
    &:hover {
      background-color: lightblue;
      color: black;
    }
  `;
  return (
    <>
      <ButtonB>Todo1</ButtonB>
      <button>Todo2</button>
      <button>Todo3</button>
      <Button>Todo4</Button>
    </>
  );
}
export default StyleComponent;
