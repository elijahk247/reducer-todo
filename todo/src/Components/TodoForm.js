import React, { useReducer, useState } from 'react';
import { initialTodos, todoReducer } from '../reducers/reducer';

export default function TodoForm() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    e.preventDefault()
    
    setTodo(e.target.value);
  }

  return(
    <div>
      <input
        type='text'
        name='todo'
        onChange={handleChange}
      />

      <button onClicK={() => dispatch({type:'ADD_TODO', payload: todo})}>
        Add Todo Item
      </button>
    </div>
  )
}
