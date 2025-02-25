import React from "react";

function Button({setIsModelOpen}) {
  function openModel() {
    setIsModelOpen(true);
  }
  return (
    <div>
      <button className="addButton" onClick={openModel}>
        +
      </button>
    </div>
  );
}

export default Button;
