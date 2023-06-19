import React from 'react'
import Task from './Task'


const TaskList = () => {
  return (
    <div>
        <ul>
           <Task /> 
        </ul>
        <button>Delete all</button>
    </div>
  )
}

export default TaskList