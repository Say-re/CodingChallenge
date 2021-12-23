// @flow

import React from 'react';
import type { SingleProp } from '../../../lib/types/forms';

const TextareaComponent = ({ onHandleInputChange }: SingleProp) => {
  return (
    <div>
      <p>Describe why you are a good fit for the job you are applying for</p>
      <textarea id='shortAnswer' rows="10" cols="50" placeholder="Testing" required onChange={(e) => {
        onHandleInputChange(e.target.value, 'userShortAnswer')
      }} />
    </div>

  )
}

export default TextareaComponent;