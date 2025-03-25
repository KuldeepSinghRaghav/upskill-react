import React from "react";
import TodoData from "./TodoData";
import { Status } from "../utils/constants";


function TodoList({
  tasks,
  setTasks,
  handleDeleteButton,
  handleAddTaskClick,
  handleRemoveTask,
  filteredTasks
}) {
  function UpdateStatus(idToUpdateStatus) {
    const updatedTasks = tasks?.map((task) => {
      if (task.id === idToUpdateStatus) {
        return {
          ...task,
          status: task?.status === Status.INCOMPLETE ? Status.COMPLETE : Status.COMPLETE,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div style={{display:"flex" , flexDirection:"column" , gap:"15px"}}>
      {filteredTasks?.map((task) => (
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
