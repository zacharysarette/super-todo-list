import React from 'react'

export default function Todo({ todo, toggleTodo, removeTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  function handleDeleteClick() {
    removeTodo(todo.id)
  }

  return (
    <div className='todoLine'>
      <label>
        <input
          className='checkBox'
          type='checkbox'
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        <span className={ todo.complete && 'lineThrough'}>
          {todo.name}
        </span>
      </label>
      <i
        className='material-icons delete noSelect'
        onClick={handleDeleteClick}
      >
        delete_outline
      </i>
    </div>
  )
}
