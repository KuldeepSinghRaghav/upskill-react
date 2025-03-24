import React, { useEffect, useState } from "react";
import icon from "../../public/icon.svg";
import AddTask from "../../public/add.svg";
import { Suspense } from "react";
import TodoTextBox from "../components/TodoTextBox";
import SideBar from "../components/SideBar";
import { logout } from "../redux/login/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LazyLoadingComp = React.lazy(() => import("../components/TodoList"));
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);
  const [updatedId, setUpdateId] = useState();
  const [search, setSearch] = useState("All");
  //! set All on save new tasks.
  const [filteredTasks, setFilteredTasks] = useState([]);

  function handelCancel() {
    setShowAddTask(false);
    setUpdateId("");
  }

  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated
    if (!authStatus) {
      navigate("/login");
    }

    // Filter tasks based on the search term
    setFilteredTasks(
      search === "All" ? tasks : tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [authStatus, navigate, tasks, search]);

  function logoutUser() {
    navigate("/login");
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
  }

  function handleAddTaskClick(tasks) {
    if (tasks) {
      setShowAddTask(!showAddTask);
      setUpdateId(tasks.id);
      setTaskText(tasks.title);
      setTaskDescription(tasks.description);
    } else {
      setShowAddTask(true);
      setUpdateId("");
      setTaskText("");
      setTaskDescription("");
    }
    // window.scrollTo(0, 0);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Smooth scroll
      });
    }
  }

  function handleRemoveTask(id) {
    // Update directly on `tasks`
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setShowAddTask(false);
  }

  function handleDeleteButton(task) {
    setUpdateId(task.id);
  }

  function handelAddTask() {
    setShowAddTask(false);
    let updatedTasks;
    if (updatedId) {
      updatedTasks = tasks.map((task) => {
        if (task.id === updatedId) {
          return { ...task, title: taskText, description: taskDescription };
        }
        return task;
      });
    } else {
      updatedTasks = [
        ...tasks,
        {
          id: Date.now(),
          title: taskText,
          description: taskDescription,
          status: "incompleted",
        },
      ];
    }
    setTasks(updatedTasks);
  }

  return (
    <div>
      <header className="todo-header">
        <div className="todo-header-left">
          {/* <img className="icon" src={icon} alt="Todo Icon" /> */}
          <h1 style={{ marginLeft: "10px" }}>Recipes Menu</h1>
        </div>
        <div>
          <button className="logout-button" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </header>
      <div className="todo-container">
        <SideBar setSearch={setSearch} />
        <div className="todo-list">
          {/* <h1 className="todo-list-heading">Menu</h1> */}
          {search && (
            <h1 className="todo-list-heading">{`${search} Recipes`}</h1>
          )}

          <h5 className="todo-list-completed">
            {filteredTasks?.filter((task) => task.status === "complete").length}/
            {filteredTasks?.length || 0} completed
          </h5>
          <div className="todo-list-data">
            <div className="todo-list-column">
              <Suspense
                fallback={
                  <div>
                    <b>Loading Data...</b>
                  </div>
                }
              >
                <LazyLoadingComp
                  tasks={filteredTasks}
                  setTasks={setTasks}
                  handleDeleteButton={handleDeleteButton}
                  handleAddTaskClick={handleAddTaskClick}
                  handleRemoveTask={handleRemoveTask}
                />
              </Suspense>
            </div>
            <div className="add-task-icon" onClick={handleAddTaskClick}>
              <img src={AddTask} alt="AddTask Icon" />
              <p>Add Recipe</p>
            </div>

            {showAddTask && (
              <TodoTextBox
                taskText={taskText}
                setTaskText={setTaskText}
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                handelAddTask={handelAddTask}
                handelCancel={handelCancel}
                updatedId={updatedId}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
