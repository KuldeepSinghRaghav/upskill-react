import React from "react";

function TodoTextBox({
  taskText,
  setTaskText,
  taskDescription,
  setTaskDescription,
  handelAddTask,
  handelCancel,
  updatedId,
}) {
  // handling multiple inputs with the same method.
  function handleChange(e) {
    if (e.target.name === "name") {
      setTaskText(e.target.value);
    }
    if (e.target.name === "description") {
      setTaskDescription(e.target.value);
    }
  }

  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleAddTaskValidation = () => {
    if (!taskText) {
      setErrorMessage("Task Title is required");
      return false;
    }
    if (taskText.length < 5) {
      setErrorMessage("Task Title must be at least 5 characters long");
      return false;
    }
    if (!taskDescription) {
      setErrorMessage("Description is required");
      return false;
    }
    if (taskDescription.length < 10) {
      setErrorMessage("Description must be at least 10 characters long");
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const handleAddTaskClick = () => {
    setErrorMessage(null);
    if (handleAddTaskValidation()) {
      handelAddTask();
    }
  };

  return (
    <div>
      <div
        style={{
          width: "1040px",
          height: "142px",
          border: "2px solid black",
          marginLeft: "24px",
          padding: "10px",
          borderRadius: "12px",
          backgroundColor: "#F4F4F4",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Task Title"
          value={taskText}
          onChange={handleChange}
          className="task-input"
          required
        />
        <hr />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={taskDescription}
          onChange={handleChange}
          className="task-input"
          required
        />
      </div>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      <div className="task-buttons">
        <button className="add-button" onClick={handleAddTaskClick}>
          {updatedId ? "Update" : "Add"}
        </button>
        <button className="cancel-button" onClick={handelCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default TodoTextBox;

