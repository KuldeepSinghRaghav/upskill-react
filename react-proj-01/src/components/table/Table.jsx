import React from "react";
import trash from "../../assets/trash.svg";
import edit from "../../assets/edit.svg";

function Table({ tasks, setTasks, setIsModelOpen, setUpdateId }) {
  function DeleteById(idToDelete) {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  }

  function UpdateText(task) {
    setIsModelOpen(true);
    setUpdateId(task.id);
  }

  function UpdateStatus(idToUpdateStatus) {
    const updatedTasks = tasks?.map((task) => {
      if (task.id === idToUpdateStatus) {
        return {
          ...task,
          status: task.status === "incomplete" ? "complete" : "complete",
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  return (
    <div>
      <table className="tableContent">
        {tasks?.map((task) => (
          <tr
            key={task.id}
            className={`${task.status === "complete" ? "complete" : ""}`}
          >
            <td>
              <input
                type="checkbox"
                checked={task.status === "complete"}
                disabled={task.status === "complete"}
                onChange={() => UpdateStatus(task.id)}
              />
            </td>
            <td>
              <b>{task.text}</b>
            </td>
            <td>
              <img
                className="deleteButton"
                onClick={() => DeleteById(task.id)}
                src={trash}
                alt=""
              />
            </td>
            <td>
              <img
                className="editButton"
                onClick={() => UpdateText(task)}
                src={edit}
                alt=""
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
