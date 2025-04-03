import React from "react";
import TodoData from "./TodoData";
import { Status } from "../utils/constants";

function TodoList({
  tasks, // tasks state is passed down as a prop
  setTasks, // setTasks function to update tasks state is passed down as a prop
  handleDeleteButton,
  handleAddTaskClick,
  handleRemoveTask,
  filteredTasks,
}) {
  function UpdateStatus(idToUpdateStatus) {
    //! Event handling:
    // Event handling: Defines an event handler function to update the status of a task
    const updatedTasks = tasks?.map((task) => {
      if (task.id === idToUpdateStatus) {
        return {
          ...task,
          status:
            task?.status === Status.INCOMPLETE
              ? Status.COMPLETE
              : Status.COMPLETE,
        };
      }
      return task;
    });
    setTasks(updatedTasks); //! state lifting: setTasks is used here to update the tasks state, which is managed in a parent component (state lifting)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
       {/* //!Conditional rendering: */}
      {/* Conditional rendering: Only renders if filteredTasks is not null or undefined */}
      {filteredTasks?.map((task) => (
        <TodoData
          task={task}
          UpdateStatus={UpdateStatus} // UpdateStatus function is passed down to TodoData as a prop
          handleDeleteButton={handleDeleteButton}
          handleAddTaskClick={handleAddTaskClick}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
