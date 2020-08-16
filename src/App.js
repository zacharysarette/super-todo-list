import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const [currentPage, setCurrentPage] = useState('All')
  const todoNameRef = useRef()

  document.addEventListener('keyup', (e) => {
    if (e.code === "Enter") handleAddTodo()
  })

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
    
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function removeTodo(id) {
    let newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    const index = newTodos.indexOf(todo)
    if (index !== -1) {
      newTodos.splice(index, 1)
      setTodos(newTodos)
    }
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
    document.getElementById('todoInput').focus();
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleNavClick(pageName) {
    setCurrentPage(pageName)
  }

  return (
    <>
      <header>
        <h1 className='mainHeader'>Super Todo List</h1>
      </header>
      <br />
      <div className='navBar'>
        <nav
          className='mainNav'
          onClick={() => handleNavClick('All')}
        >
          All
          <div className={ currentPage === 'All' && 'navIndicator'}></div>
        </nav>
        <nav
          className='mainNav'
          onClick={() => handleNavClick('Active')}
        >
          Active
          <div className={ currentPage === 'Active' && 'navIndicator'}></div>
        </nav>
        <nav
          className='mainNav'
          onClick={() => handleNavClick('Completed')}
        >
          Completed
          <div className={ currentPage === 'Completed' && 'navIndicator'}></div>
        </nav>
      </div>
      <br />
      <main className='todoMain'>
        { currentPage !== 'Completed' &&
          <>
            <input className='addInput' id='todoInput' ref={todoNameRef} type="text" />
            <button className='addButton' onClick={handleAddTodo}>Add Todo</button>
            <br />
            <br />
          </>
        }
        { currentPage === 'Completed' && todos.filter(t => t.complete === true).length > 0 &&
          <button
            onClick={handleClearTodos}
            className='deleteAllButton'
          >
            <i className='material-icons deleteAllIcon'>delete_outline</i>
            Delete All
          </button>
        }
        <content className='todoContent'>
          <TodoList
            todos={(() => {
              switch(currentPage) {
                case 'All': return todos;
                case 'Active': return todos.filter(t => t.complete === false)
                case 'Completed': return todos.filter(t => t.complete === true)
              }
            })()}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </content>

      </main>
      <footer>
        Zachary Sarette &copy; 2020
      </footer>
    </>
  )
}

export default App;
