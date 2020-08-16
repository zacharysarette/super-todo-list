import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

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

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    console.log(name)
    todoNameRef.current.value = null
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <h1 className='mainHeader'>Todo</h1>
      <br />
      <div className='navBar'>
        <nav className='mainNav'>
          All
        </nav>
        <nav className='mainNav'>
          Active
        </nav>
        <nav className='mainNav'>
          Completed
        </nav>
      </div>
      <br />
      <main className='todoMain'>
        <input className='addInput' ref={todoNameRef} type="text" />
        <button className='addButton' onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Complete</button>
        <div>
          {todos.filter(todo => !todo.complete).length}left to do
        </div>
        <content className='todoContent'>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </content>
      </main>
    </>
  )
}

export default App;
