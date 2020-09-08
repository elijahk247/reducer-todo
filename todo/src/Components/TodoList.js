import React, {useState, useReducer} from 'react'
import {intialTodos, todoReducer} from '../reducers/reducer'

export default function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, intialTodos);
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setTodo(e.target.value);
  }

  return((
    <div className='todo-container'>
      <div className='input-todo'>
        <input 
          type='text' 
          name='todo' 
          onChange={handleChange} 
        />

        <button onClick={() => dispatch({type: 'ADD_TODO', payload: todo})}>  Add Todo Item
        </button>
      </div>
    </div>
  )

}