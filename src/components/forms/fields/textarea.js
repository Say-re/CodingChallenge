import React from 'react';

const TextareaComponent = ({ onUpdateFormField }) => {
  return (
    <textarea id='shortAnswer' rows="10" cols="50" placeholder="Testing" onChange={(e) => {
      onUpdateFormField(e.target.value, 'userShortAnswer')
    }} />
  )
}

export default TextareaComponent;