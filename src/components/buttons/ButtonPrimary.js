import React from 'react'

const ButtonPrimary = ({ text, onClick }) => {
  return (
    <button
      className='button button--primary button--right'
      onClick={() => onClick()}>
      {text}
    </button>
  )
}

export default ButtonPrimary
