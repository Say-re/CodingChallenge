import React from 'react';

const TextInputComponent = ({ onUpdateFormField, value, field, type, id, name, placeholder }) => {

  return (
    <input type={type} id={id} name={name} placeholder={placeholder} required onChange={(e) => {
      onUpdateFormField(e.target.value, name)
    }}
    />
  )
}

export default TextInputComponent;