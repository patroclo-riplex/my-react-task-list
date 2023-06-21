import React, { useRef, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useForm } from '../hooks/useForm'

export const Taskpecifit = ({task, handleCompleteTask, handleDeleteTask, handleUpdateTask}) => {

    const {updateDescription, onInputChange} = useForm({
        updateDescription: task.description
    })

    const [disabled, setDisable] = useState(true)
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = task.id
        const description = updateDescription


        handleUpdateTask(id, description);

        setDisable(!disabled)

        focusInputRef.current.focus()
    }


  return (
    <li>
        <span
            onClick={() => handleCompleteTask(task.id)}
        >
            <label className={`container-done ${task.done ? 'active' : ''}`}></label>
        </span>
        <form onSubmit={onSubmitUpdate}>
            <input 
            type='text' 
            className={`input-update ${
                task.done ? 'text-decoration-dashed' : ''
            }`}
            name='updateDescription' 
            value={updateDescription} 
            onChange={onInputChange}
            placeholder='¿Que hay que hacer?' 
            readOnly={disabled}
            ref={focusInputRef}
        />

            <button type='submit' >
                <FaEdit />
            </button>

        </form>

        <button onClick={() => handleDeleteTask(task.id)}>     
            <FaTrash /> 
        </button>
    </li>
  )
}
