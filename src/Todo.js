import React from 'react'

export default function Todo({ todo, toggleTodo, removeTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  function handleDeleteClick() {
    removeTodo(todo.id)
  }

  return (
    <article className='item'>
      <label>
        <input
          className='checkBox'
          type='checkbox'
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        <span className={ todo.complete ? 'span--line-through' : ''}>
          {todo.name}
        </span>
      </label>
      <button className='button button--delete-icon'>
        <i
          className='material-icons noSelect'
          onClick={handleDeleteClick}
        >
          delete_outline
        </i>
      </button>
    </article>
  )
}
