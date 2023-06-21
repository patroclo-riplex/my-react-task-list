
import React from 'react';

const Header = ({ tasksCount, pendingTasksCount }) => {
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <h3>N° de Tareas: {tasksCount} </h3>
        <h3>Pendientes: {pendingTasksCount} </h3>
      </div>
      <div>
        <h3>Agregar Actividad</h3>
      </div>
    </div>
  );
};

export default Header;
