import React, { useState, useEffect } from 'react'
import TodoContent from './components/Todo/TodoContent'
import TopBar from './components/UI/TopBar'
import NavTabs from './components/UI/NavTabs'
import Header from './components/containers/Header'
import Footer from './components/containers/Footer'
import TextContent from './const/TextContent'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const App = () => {
  const [todos, setTodos] = useState([])
  const [currentPage, setCurrentPage] = useState('All')
  const { footer, title } = TextContent

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const todosEmpty = () => todos.filter(t => t.complete === true).length > 0

  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    return
  }

  return (
    <>
      <Header text={title} />
      <main className='main'>
      <NavTabs
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <TopBar
        currentPage={currentPage}
        todosEmpty={() => todosEmpty()}
        setTodos={setTodos}
        clearTodos={handleClearTodos}
      />
      <TodoContent
        todos={todos}
        setTodos={setTodos}
        currentPage={currentPage}
      />
      </main>
      <Footer text={footer} />
    </>
  )
}

export default App
