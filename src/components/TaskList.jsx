import React from 'react'
import { useForm } from '../hooks/useForm'




const TaskList = ({handleNewTask}) => {


  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  })

  const onFormSubmit = e => {
    e.preventDefault()

    if(description.length <= 1) return

    let newTask = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    handleNewTask(newTask)

    onResetForm()

  }

  return (
    <form onSubmit={onFormSubmit}>
      <input 
      type='text' 
      name='description' 
      value={description} 
      onChange={onInputChange}
      placeholder='¿Que hay que hacer?' />

      <button type='submit' >Agregar</button>

    </form>
  )
}

export default TaskList