import React, {useState, useReducer} from 'react'
import {initialTodos, todoReducer} from '../reducers/reducer'

export default function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setTodo(e.target.value);
  }

  return(
    <div className='todo-container'>
      <div className='input-todo'>
        <input 
          type='text' 
          name='todo' 
          onChange={handleChange} 
        />

        <button onClick={() => dispatch({type: 'ADD_TODO', payload: todo})}>
          Add Todo Item
          </button>
        <button onClick={() => dispatch({type: 'REMOVE_COMPLETED'})}>
          Remove Completed Items

           </button>
      </div>

      {
        state.map(todoItem => {
          return(
            <div className='todo-item'>
              {
                !todoItem.completed ? 
                (
                  <div> 
                    <h3 onClick={() => dispatch({type: 'COMPLETE', payload: todoItem.id})}>
                      {todoItem.item}
                    </h3>
                  </div>
                ) :
                (
                  <div> 
                    <h3 onClick={() => dispatch({type: 'COMPLETE', payload: todoItem.id})}>
                      {todoItem.item}
                    </h3>
                  </div>
                )
              }
            </div>
          )
        })
      }
      
    </div>
  )
}