
import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Task from './components/Task';
import { useTask } from './hooks/useTask';

function App() {
  const {
    tasks,
    tasksCount,
    pendingTasksCount,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask,
  } = useTask();

  return (
    <div className='App'>
      <Header tasksCount={tasksCount} pendingTasksCount={pendingTasksCount} />
      <TaskList handleNewTask={handleNewTask} />
      <Task
        tasks={tasks}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
      />
    </div>
  );
}

export default App;
