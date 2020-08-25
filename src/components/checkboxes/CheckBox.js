import React from 'react'

const CheckBox = ({ checked, onChange, label, labelClassName }) => {
  return (
    <label className='checkbox__label'>
      <input
        className='checkBox'
        type='checkbox'
        checked={checked}
        onChange={() => onChange()}
      />
      <span className={'label' + labelClassName}>
        {label}
      </span>
    </label>
  )
}

export default CheckBox
