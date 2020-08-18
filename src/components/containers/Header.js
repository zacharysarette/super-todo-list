import React from 'react'

const Header = ({ text }) => {
  return (
    <header className='header'>
      <h1 className='h1 h1--title h1--center'>{text}</h1>
    </header>
  )
}

export default Header
