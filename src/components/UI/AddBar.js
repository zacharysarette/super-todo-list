import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

const AddBar = ({ addText, reference, onClick }) => {
  return (
    <>
      <input className='input input--large' ref={reference} type="text" />
      <ButtonPrimary text={addText} onClick={onClick} />
    </>
  )
}

export default AddBar