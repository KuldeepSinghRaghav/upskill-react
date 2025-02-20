import { useState } from "react";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{ width: "750px", height: "135px", backgroundColor: "gray" }}
        >
          <h1 style={{ textAlign: "center" }}>TODO TASK</h1>
          <input type="text"></input>
          <select>
            <option value="all">ALL</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
          <button>Add Task</button>
        </div>

        <div
          style={{
            width: "750px",
            height: "575",
            backgroundColor: "orange",
            paddingTop: "700px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The quick brown fox jumps over the lazy dog.</td>
                <td>Incomplete</td>
              </tr>
              <tr>
                <td>She sells seashells by the seashore.</td>
                <td>Complete</td>
              </tr>
              <tr>
                <td>Peter Piper picked a peck of pickled peppers.</td>
                <td>Incomplete</td>
              </tr>
              <tr>
                <td>
                  How much wood would a woodchuck chuck if a woodchuck could
                  chuck wood?
                </td>
                <td>Complete</td>
              </tr>
              <tr>
                <td>
                  A sentence is a group of words that makes complete sense.
                </td>
                <td>Incomplete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
