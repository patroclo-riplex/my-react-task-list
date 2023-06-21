import { Taskpecifit } from "./Taskpecifit";

const Task = ({tasks, handleCompleteTask, handleDeleteTask, handleUpdateTask}) => {
  return (
    <ul>
      {tasks.map(task => (
          <Taskpecifit 
            key={task.id}
            task={task}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
            handleUpdateTask={handleUpdateTask}
          />
        ))}
    </ul>
  )
}

export default Task;