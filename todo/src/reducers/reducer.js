import React from 'react'

export const initialTodos = [
  {
  item: 'Learn about reducers',
  completed: false,
  id: 389298759
  }
]

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [...state, newTodo];

      case 'COMPLETE':
      return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo));

      case 'REMOVE_COMPLETED':
        return state.filter((todo) => !todo.completed);
      
      default:
        return state;
  }
}