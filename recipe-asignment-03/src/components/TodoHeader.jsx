import React from "react";
import styled from 'styled-components';

//! Styled component: 
// Styled component for the Logout Button
const LogoutButton = styled.button`
  background-color: #f9f9f9;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 4px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    color: white;
    background-color: black;
  }
`;

function TodoHeader({logoutUser}) {
  return (
    <div>
      <header className="todo-header">
        <div className="todo-header-left">
          <h1 style={{ marginLeft: "10px" }}>Recipes Menu</h1>
        </div>
        <div>
          {logoutUser && (
            <LogoutButton onClick={logoutUser}>Logout</LogoutButton>
          )}
        </div>
      </header>
    </div>
  );
}

export default TodoHeader;
