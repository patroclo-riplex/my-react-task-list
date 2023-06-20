import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

export function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask !== "") {
      const newCheck = {
        id: Date.now(),
        description: newTask,
        completed: false
      };
      setTasks([...tasks, newCheck]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditedTask({ ...taskToEdit });
  };

  const saveEditedTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setEditedTask(null);
  };

  const handleEditTaskChange = (e) => {
    setEditedTask({ ...editedTask, description: e.target.value });
  };

  const handleEditTaskBlur = () => {
    saveEditedTask();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa una tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>AGREGAR</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {editedTask && editedTask.id === task.id ? (
              <input
                type="text"
                value={editedTask.description}
                onChange={handleEditTaskChange}
                onBlur={handleEditTaskBlur}
              />
            ) : (
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none"
                }}
              >
                {task.description}
              </span>
            )}
            <button onClick={() => editTask(task.id)}>
              <FaEdit />
            </button>
            <button onClick={() => deleteTask(task.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => setTasks([])}>Delete All</button>
    </div>
  );
}
