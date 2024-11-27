import { useState } from "react";
import { tasks } from "./data/tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // Funzione che genera la tasklist delle task non completate
  const genListTodoTask = () => {
    const todoTasks = tasks.filter((task) => task.state != "completed");
    return (
      <div>
        {/* current task number */}
        <h4 className="py-3 fw-bold">
          Current Tasks &#40;{todoTasks.length}&#41;
        </h4>

        {/* todo tasklist */}
        <ul className="list-group list-group-flush">
          {todoTasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex px-0">
              {/* list element data */}
              <div>
                <div className="fw-bold">{task.title}</div>
                <div>Priority: {task.priority}</div>
                <div>Est. Time: {task.estimatedTime}</div>
              </div>

              {/* list element status */}
              <div>
                <span className="badge text-bg-warning rounded mx-3">
                  {task.state}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Funzione che genera la tasklist delle task non completate
  const genListCompletedTask = () => {
    const todoTasks = tasks.filter((task) => task.state == "completed");
    return (
      <div>
        {/* current task number */}
        <h4 className="py-3 fw-bold">
          Completed Tasks &#40;{todoTasks.length}&#41;
        </h4>

        {/* todo tasklist */}
        <ul className="list-group list-group-flush">
          {todoTasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex px-0">
              {/* list element data */}
              <div>
                <div className="fw-bold">{task.title}</div>
                <div>Priority: {task.priority}</div>
                <div>Est. Time: {task.estimatedTime}</div>
              </div>

              {/* list element status */}
              <div>
                <span className="badge text-bg-success rounded mx-3">
                  {task.state}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // # Output
  return (
    <>
      {/* Header */}
      <header className="p-3 header">
        <div className="container">
          <h1 className="fw-bold">Task Manager</h1>
        </div>
      </header>

      {/* Main */}
      <main>
        <div className="container">
          {/* todo tasks list */}
          {genListTodoTask()}

          <hr />

          {/* completed tasks list */}
          {genListCompletedTask()}
        </div>
      </main>
    </>
  );
}

export default App;
