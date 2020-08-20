import React from 'react'

const InputTextLarge = ({label, reference}) => {
  return (
    <label>
      <div className='label__text-input'>{label}</div>
      <input className='input input--large' ref={reference} type="text" />
    </label>
  )
}

export default InputTextLarge
