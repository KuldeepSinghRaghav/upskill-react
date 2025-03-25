import React, { useRef } from "react";

function TodoTextBox({
  taskText,
  setTaskText,
  taskDescription,
  setTaskDescription,
  handelAddTask,
  handelCancel,
  updatedId,
  taskImage,
  setTaskImage,
}) {
  const fileInputRef = useRef(null);

  function handleChange(e) {
    if (e.target.name === "name") {
      setTaskText(e.target.value);
    }
    if (e.target.name === "description") {
      setTaskDescription(e.target.value);
    }
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setTaskImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleAddTaskValidation = () => {
    if (!taskText) {
      setErrorMessage("Task Title is required");
      return false;
    }
    if (taskText.length < 3) {
      setErrorMessage("Task Title must be at least 3 characters long");
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
    // Only show image error if taskImage is null or undefined, not an empty string
    if (taskImage === null || taskImage === undefined) {
      setErrorMessage("Image is required");
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

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      handleAddTaskClick();
    }
  }

  const handleRemoveImage = () => {
    setTaskImage(""); // Keep this as empty string
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <div
        style={{
          width: "1051px",
          height: "auto",
          border: "2px solid black",
          marginLeft: "4px",
          padding: "10px",
          borderRadius: "12px",
          backgroundColor: "#F4F4F4",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Recipe title"
          style={{ fontWeight: "bold" }}
          value={taskText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="task-input"
          required
        />
        <hr />
        <textarea
          name="description"
          placeholder="Description"
          value={taskDescription}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="task-input"
          required
          style={{ height: "80px", resize: "none" }}
        />
        <hr />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="task-input"
          ref={fileInputRef}
          required
        />
        {taskImage && (
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={taskImage}
              alt="Task Image"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
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