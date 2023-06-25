import React, { useState } from 'react';
import { useForm } from '../hooks/useForm'

const TaskList = ({handleNewTask}) => {

  const [showAlert, setShowAlert] = useState(false)
  const { name, description, onInputChange, onResetForm } = useForm({
    name: '',
    description: '',
  })

  const onFormSubmit = e => {
    e.preventDefault()

    if(name.length < 3) {
      setShowAlert(true);
      return;
    }

    let newTask = {
      id: new Date().getTime(),
      name: name,
      description: description,
      done: false
    }

    handleNewTask(newTask)

    onResetForm()
    setShowAlert(false);
  }

  return (
    <form onSubmit={onFormSubmit}>
      {showAlert && <div className="alert">El nombre de la tarea debe tener al menos 3 caracteres.</div>}
      <div>
        <label>
          Nombre de la tarea:
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            placeholder="¿Que hay que hacer?"
          />
        </label>
      </div>
      <div>
        <label>
          Descripción de la tarea:
          <textarea
            name="description"
            value={description}
            onChange={onInputChange}
            placeholder="Descripción de la tarea"
          />
        </label>
      </div>
      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskList;
