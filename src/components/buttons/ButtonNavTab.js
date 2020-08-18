import React from 'react'

const ButtonNavTab = ({text, onClick, indicatorClass }) => {
  return (
    <button
      className='button button__tab'
      onClick={() => onClick()}
    >
      {text}
      <div className={indicatorClass}></div>
    </button>
  )
}

export default ButtonNavTab
