import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const Task = () => {
  return (
       <li> 
            <p>Buy a new gaming laptop</p>
                <button type='submit'>
                    <FaEdit />
                </button>

            <button>
                <FaTrash />
            </button>
        </li>
  )
};

export default Task