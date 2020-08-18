import React from 'react'

const ButtonDelete = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className='button button--delete'
    >
      <i className='material-icons icon--delete icon--no-select'>delete_outline</i>
      {text}
    </button>
  )
}

export default ButtonDelete
