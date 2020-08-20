import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'
import InputTextLarge from '../inputs/InputTextLarge'

const AddBar = ({ addText, label, reference, onClick }) => {
  return (
    <>
      <InputTextLarge
        label ={label}
        reference ={reference}
      />
      <ButtonPrimary
        text={addText}
        onClick={onClick}
      />
    </>
  )
}

export default AddBar