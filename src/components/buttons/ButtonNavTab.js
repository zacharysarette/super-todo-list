import React from 'react'

const ButtonNavTab = ({text, onClick, indicatorClass, buttonTabIndex }) => {
  return (
    <button
      className='button button__tab'
      onClick={() => onClick()}
      tabIndex={buttonTabIndex}
    >
      {text}
      <div className={indicatorClass}></div>
    </button>
  )
}

export default ButtonNavTab
