import React, { useState } from "react";
import "./model.css"; // Import CSS for styling

function Model({tasks, setTasks, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModel = () => {
    setIsOpen(false);
    onClose();
  };

  function AddNewTasks() {
    if (document?.getElementById("addNewTask").value.length >= 5) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: document.getElementById("addNewTask").value,
          status: "incomplete",
        },
      ]);
      setIsOpen(false);
      onClose();
    } else {
      alert("Task must be at least 5 characters long.");
    }
  }

  return (
    <div>
      {isOpen && (
        <div className="model">
          <div className="model-content">
            <h1
              style={{
                textAlign: "center",
                textOrientation: "vertical",
              }}
            >
              New Note
            </h1>
            <input
              className="addTaskInput"
              type="text"
              id="addNewTask"
              placeholder="Input your notes..."
              required
              minLength={4}
            ></input>
            <button className="addTaskButton" onClick={AddNewTasks}>APPLY</button>
            <button className="cancel-button" onClick={closeModel}>CANCEL</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;
