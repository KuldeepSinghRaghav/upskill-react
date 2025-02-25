import React, { useState, useEffect } from "react";
import "./model.css";

function Model({ tasks, setTasks, onClose, updateId, setUpdateId }) {
  const [isOpen, setIsOpen] = useState(true);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (updateId) {
      const task = tasks.find((task) => {
        return task?.id === updateId;
      });
      setTaskText(task?.text);
    }
  }, [updateId]);

  const closeModel = () => {
    setIsOpen(false);
    onClose();
    setUpdateId(null);
  };

  let title = updateId ? "Edit Note" : "New Note";
  let clickButton = updateId ? "UPDATE" : "APPLY";

  function handleTaskChange(e) {
    setTaskText(e.target.value);
  }

  function handleTaskSubmit() {
    if (taskText.length < 5) {
      alert("Task must be at least 5 characters long.");
      return;
    }

    if (updateId) {
      // Update existing task
      setTasks(
        tasks.map((task) =>
          task.id === updateId ? { ...task, text: taskText } : task
        )
      );
    } else {
      // Add new task
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: taskText,
          status: "incompleted",
        },
      ]);
    }

    closeModel();
  }

  return (
    <div>
      {isOpen && (
        <div className="model">
          <div className="model-content">
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <input
              className="addTaskInput"
              type="text"
              id="addNewTask"
              placeholder="Input your notes..."
              value={taskText} // Controlled input
              onChange={handleTaskChange} // Allows typing
              required
              minLength={5}
            />
            <button className="addTaskButton" onClick={handleTaskSubmit}>
              {clickButton}
            </button>
            <button className="cancel-button" onClick={closeModel}>
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;
