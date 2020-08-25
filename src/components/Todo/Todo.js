import React from 'react'
import ButtonIcon from '../buttons/ButtonIcon'
import CheckBox from '../checkboxes/CheckBox'

const Todo = ({ todo, toggleTodo, removeTodo }) => {

  const handleTodoClick = () => toggleTodo(todo.id)

  const handleDeleteClick = () => removeTodo(todo.id)

  const getLabelClassName = () => todo.complete ? ' span--line-through' : ''

  return (
    <article className='item'>
      <CheckBox
        onChange={handleTodoClick}
        checked={todo.complete}
        label={todo.name}
        labelClassName={getLabelClassName()}
      />
      <ButtonIcon
        icon='delete_outline'
        styleClass='button--delete-icon button--text-right button--right'
        onClick={handleDeleteClick}
      />
    </article>
  )
}

export default Todo
