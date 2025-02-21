import react, { useState, useEffect } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function AddNewTasks() {
    if (document?.getElementById("addTask").value.length >= 5) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: document.getElementById("addTask").value,
          // status: incomplete,
        },
      ]);
    } else {
      alert("Task must be at least 5 characters long.");
    }
  }

  function DeleteById(idToDelete) {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  }

  useEffect(() => {
    const filteredTasks = tasks.filter((task) =>
      task?.text?.includes(searchQuery)
    );
    if (searchQuery === "") {
      setSearchData([]);
    } else if (filteredTasks.length === 0) {
      setSearchData([]);
    } else {
      setSearchData(filteredTasks);
    }
  }, [searchQuery]);

  // function abcd(){

  // }

  return (
    <>
      <h1>Todo :</h1>
      <ul type="none">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => DeleteById(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h1>Searched Data :</h1>
      <ul type="none">
        {searchData.map((task) => (
          <li key={task.id}>
            {task.text}
            {/* <button onClick={() => DeleteById(task.id)}>Delete</button> */}
          </li>
        ))}
      </ul>

      <input
        type="text"
        id="addTask"
        placeholder="add new tasks"
        required
        minLength={4}
      ></input>
      <br />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
      />
      <br />
      <button onClick={AddNewTasks}>Add Task</button>
      <br />
      <button onClick={() => setTasks([])}>Clear Tasks</button>
    </>
  );
}
export default Todo;
