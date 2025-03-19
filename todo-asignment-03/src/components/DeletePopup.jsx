import React from "react";
import Delete from "../../public/delete.svg";

function DeletePopup({ handleRemoveTask }) {
  return (
    <div className="popup-border" onClick={handleRemoveTask}>
      <img
        src={Delete}
        alt="AddTask Icon"
        style={{ backgroundColor: "#fff" }}
      />
      <p>Delete Task</p>
    </div>
  );
}

export default DeletePopup;
