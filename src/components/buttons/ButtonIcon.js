import React from 'react'

const ButtonIcon = ({ icon, styleClass, onClick }) => {
  return (
    <button className={'button ' + styleClass}>
      <i
        className='material-icons noSelect'
        onClick={() => onClick()}
      >
        {icon}
      </i>
    </button>
  )
}

export default ButtonIcon
