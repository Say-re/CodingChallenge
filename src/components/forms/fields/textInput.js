// @flow

import React from 'react';
import type { TextInputProps } from '../../../lib/types/forms';

const TextInputComponent = ({ onHandleInputChange, type, id, name, placeholder, pattern }: TextInputProps) => {

  return (
    <input pattern={pattern} type={type} id={id} name={name} placeholder={placeholder} required onChange={(e) => {
      onHandleInputChange(e.target.value, name)
    }}
    />
  )
}

export default TextInputComponent;