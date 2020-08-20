import React from 'react'

const ButtonIcon = ({ icon, styleClass, onClick }) => {
  return (
    <button
      className={'button ' + styleClass}
      onClick={() => onClick()}
    >
      <i className='material-icons icon--no-select' >
        {icon}
      </i>
    </button>
  )
}

export default ButtonIcon
