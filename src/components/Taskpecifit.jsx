import React, { useRef, useState } from 'react';
import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const Taskpecifit = ({ task, handleCompleteTask, handleDeleteTask, handleUpdateTask }) => {
  const { updateName, updateDescription, onInputChange } = useForm({
    updateName: task.name,
    updateDescription: task.description,
  });

  const [editing, setEditing] = useState(false);
  const nameInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      name: updateName,
      description: updateDescription,
    };

    handleUpdateTask(updatedTask);

    setEditing(false);
  };

  return (
    <li>
      <span onClick={() => handleCompleteTask(task.id)}>
        <label className={`container-done ${task.done ? 'active' : ''}`} />
      </span>
      <div className={`task-name ${task.done ? 'text-decoration-dashed' : ''}`}>
        {editing ? (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="input-update"
              name="updateName"
              value={updateName}
              onChange={onInputChange}
              ref={nameInputRef}
            />
            <button type="submit">
              <FaCheckCircle />
            </button>
          </form>
        ) : (
          <div>{task.name}</div>
        )}
      </div>
      <div className={`task-description ${task.done ? 'text-decoration-dashed' : ''}`}>
        {editing ? (
          <form onSubmit={handleFormSubmit}>
            <textarea
              className="input-update"
              name="updateDescription"
              value={updateDescription}
              onChange={onInputChange}
              ref={descriptionInputRef}
            />
            <button type="submit">
                <FaCheckCircle />
            </button>
          </form>
        ) : (
          <div>{task.description}</div>
        )}
      </div>
      <button onClick={handleEditClick}>
        <FaEdit />
      </button>
      <button onClick={() => handleDeleteTask(task.id)}>
        <FaTrash />
      </button>
    </li>
  );
};
