import React, { useRef } from 'react'
import AddBar from './AddBar'
import ButtonDelete from '../buttons/ButtonDelete'
import TextContent from '../../const/TextContent'
import { v4 as uuidv4 } from 'uuid'

const TopBar = ({currentPage, todosEmpty, setTodos, clearTodos}) => {

  const todoNameRef = useRef()

  const { addTodo, deleteAll, addTodoLabel} = TextContent

  const handleAddTodo = () => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
    todoNameRef.current.focus();
    return
  }

  document.addEventListener('keyup', (e) => {
    if (e.code === "Enter") handleAddTodo()
  })

  return (
    <>
        {currentPage !== 'Completed' &&
          <>
            <AddBar
              addText={addTodo}
              label={addTodoLabel}
              reference={todoNameRef}
              onClick={() => handleAddTodo()}
            />
            <br />
            <br />
          </>
        }
        {currentPage === 'Completed' && todosEmpty() &&
          <ButtonDelete text={deleteAll} onClick={() => clearTodos()} />
        }
    </>
  )
}

export default TopBar
