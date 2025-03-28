import React from "react";

function TodoHeader({logoutUser}) {
  return (
    <div>
      <header className="todo-header">
        <div className="todo-header-left">
          <h1 style={{ marginLeft: "10px" }}>Recipes Menu</h1>
        </div>
        <div>
          {logoutUser && (
            <button className="logout-button" onClick={logoutUser}>
              Logout
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default TodoHeader;
