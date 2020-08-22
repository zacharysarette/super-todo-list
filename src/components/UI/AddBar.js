import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'
import InputTextLarge from '../inputs/InputTextLarge'

const AddBar = ({ addText, label, reference, onClick }) => {
  const handleOnSubmit = e => {
    e.preventDefault()
    onClick()
    return
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <InputTextLarge
        label={label}
        reference={reference}
      />
      <ButtonPrimary
        text={addText}
        onClick={() => null}
      />
    </form>
  )
}

export default AddBar