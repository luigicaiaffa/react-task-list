import { useState } from "react";
import { tasks } from "./data/tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // * Funzione che genera status badge
  const genStatusBadge = (status) => {
    // backlog
    if (status == "backlog") {
      return (
        <div>
          <span className="badge text-bg-danger mx-3">{status}</span>
        </div>
      );
    }

    // in progress
    if (status == "in_progress") {
      return (
        <div>
          <span className="badge text-bg-warning mx-3">{status}</span>
        </div>
      );
    }

    // completed
    if (status == "completed") {
      return (
        <div>
          <span className="badge text-bg-success mx-3">{status}</span>
        </div>
      );
    }
  };

  // * Funzione che genera una lista di task
  const genTaskList = (taskList) => {
    return (
      <ul className="list-group list-group-flush">
        {taskList.map((task) => (
          <li key={task.id} className="list-group-item d-flex px-0">
            {/* list element data */}
            <div>
              <div className="fw-bold">{task.title}</div>
              <div>Priority: {task.priority}</div>
              <div>Est. Time: {task.estimatedTime}</div>
            </div>

            {/* list element status */}
            {genStatusBadge(task.state)}
          </li>
        ))}
      </ul>
    );
  };

  // * Funzione che genera la lista delle task non completate
  const todoTaskList = () => {
    const todoTasks = tasks.filter((task) => task.state != "completed");

    return (
      <div>
        {/* active tasks number */}
        <h4 className="py-3 fw-bold">
          Current Tasks &#40;{todoTasks.length}&#41;
        </h4>

        {/* todo tasks list */}
        {genTaskList(todoTasks)}
      </div>
    );
  };

  // * Funzione che genera la lista delle task completate
  const completedTaskList = () => {
    const completedTasks = tasks.filter((task) => task.state == "completed");

    return (
      <div>
        {/* completed tasks number */}
        <h4 className="py-3 fw-bold">
          Completed Tasks &#40;{completedTasks.length}&#41;
        </h4>

        {/* completed tasks list */}
        {genTaskList(completedTasks)}
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
          {todoTaskList()}

          <hr />

          {/* completed tasks list */}
          {completedTaskList()}
        </div>
      </main>
    </>
  );
}

export default App;
