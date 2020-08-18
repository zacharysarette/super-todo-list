import React from 'react'
import TodoList from './TodoList'
import { removeFromArray } from '../../utils/utils'

const TodoContent = ({todos, setTodos, currentPage}) => {

  const getTodosForPage = () => {
    switch (currentPage) {
      case 'Active': return todos.filter(t => t.complete === false);
      case 'Completed': return todos.filter(t => t.complete === true);
      default: return todos;
    }
  }

  const toggleTodo = id => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
    return
  }

  const removeTodo = id => {
    let newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    newTodos = removeFromArray(newTodos, todo)
    setTodos(newTodos)
    return
  }

  return (
    <content className='content'>
      <TodoList
        todos={getTodosForPage()}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </content>
  )
}

export default TodoContent
