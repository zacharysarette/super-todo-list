import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label>
        <input
          className="checkBox"
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
        <i class="material-icons delete">delete_outline</i>
      </label>
    </div>
  )
}
