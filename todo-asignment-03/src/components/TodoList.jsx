import React from "react";
import TodoData from "./TodoData";

function TodoList({
  tasks,
  setTasks,
  handleDeleteButton,
  handleAddTaskClick,
  handleRemoveTask,
}) {
  function UpdateStatus(idToUpdateStatus) {
    const updatedTasks = tasks?.map((task) => {
      if (task.id === idToUpdateStatus) {
        return {
          ...task,
          status: task?.status === "incomplete" ? "complete" : "complete",
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      {tasks?.map((task) => (
        <TodoData
          task={task}
          UpdateStatus={UpdateStatus}
          handleDeleteButton={handleDeleteButton}
          handleAddTaskClick={handleAddTaskClick}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
