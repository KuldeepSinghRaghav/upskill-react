import React, { useRef } from "react";

function TodoTextBox({
  setTaskText,
  taskText,
  taskDescription,
  setTaskDescription,
  handelAddTask,
  handelCancel,
  updatedId,
  taskImage,
  setTaskImage,
}) {
  // useRef hook to get a reference to the file input element
  const fileInputRef = useRef(null);

  //! Handling multiple form inputs :
  function handleChange(e) {
    if (e.target.name === "name") {
      setTaskText(e.target.value); // Update task title state
    }
    if (e.target.name === "description") {
      setTaskDescription(e.target.value); // Update task description state
    }
    if (e.target.name === "image") {
      // Handle image file selection
      const file = e.target.files[0]; // Get the selected file
      if (file) {
        const reader = new FileReader(); // Create a FileReader to read the file
        reader.onloadend = () => {
          // After file is read, set the task image state with base64 data
          setTaskImage(reader.result);
        };
        reader.readAsDataURL(file); // Read the file as a data URL (base64)
      }
    }
  }

  // State to manage error messages for input validation
  const [errorMessage, setErrorMessage] = React.useState(null);

  // Function to validate input fields before adding a task
  const handleAddTaskValidation = () => {
    if (!taskText) {
      setErrorMessage("Recipe title is required");
      return false;
    }
    if (taskText.length < 3) {
      setErrorMessage("Recipe title must be at least 3 characters long");
      return false;
    }
    if (taskText.length > 30) {
      setErrorMessage("Recipe title can't be more than 30 characters long");
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
    if (taskDescription.length > 200) {
      setErrorMessage("Description can't be more than 200 characters long");
      return false;
    }
    // Only show image error if taskImage is null or undefined, not an empty string
    if (taskImage === null || taskImage === undefined) {
      setErrorMessage("Image is required");
      return false;
    }
    setErrorMessage(null); // Clear any previous error messages
    return true; // Return true if validation passes
  };

  // Function to handle the "Add" button click, including validation
  const handleAddTaskClick = () => {
    setErrorMessage(null); // Clear any previous error messages
    if (handleAddTaskValidation()) {
      handelAddTask(); // Call the prop function to add/update the task
    }
  };

  // Function to handle "Enter" key press for quick task submission
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      handleAddTaskClick(); // Trigger addTaskClick on Enter key (but not Shift+Enter)
    }
  }

  // Function to remove the selected image
  const handleRemoveImage = () => {
    setTaskImage(""); // Clear the task image state (set to empty string)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input value
    }
  };

  return (
    // Main container div
    <div>
      {/* Container for input fields and image preview */}
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
        {/* Input field for task title */}
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
        {/* Textarea for task description */}
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
        {/* File input for task image */}
        <input
          type="file"
          name="image"
          accept="image/*" // Accept only image files
          onChange={handleChange}
          className="task-input"
          ref={fileInputRef} // Attach the ref to the file input
          style={{ display: "none" }}
          id="file-input"
        />
        {!taskImage && (
          <label
            htmlFor="file-input"
            style={{
              padding: "5px 10px",
              backgroundColor: "rgba(255, 79, 90, 1)",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "4px 2px 4px gray",
            }}
          >
            Choose file
          </label>
        )}
        {/* <span style={{ marginLeft: "10px" }}>
          {taskImage ? "" : "Image Required*"}
        </span> */}
        {/* Conditionally render image preview and remove button if taskImage exists */}
        {taskImage && (
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Display the selected image */}
            <img
              src={taskImage}
              alt="Task Image"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            {/* Button to remove the selected image */}
            <button
              type="button"
              onClick={handleRemoveImage}
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "#ff4f5a",
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
      {/* Conditionally render error message if errorMessage state is not null */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {/* Container for action buttons (Add/Update and Cancel) */}
      <div className="task-buttons">
        {/* Button to add or update task, text changes based on updatedId prop */}
        <button className="add-button" onClick={handleAddTaskClick}>
          {updatedId ? "Update" : "Add"}
        </button>
        {/* Button to cancel task input */}
        <button className="cancel-button" onClick={handelCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default TodoTextBox;
