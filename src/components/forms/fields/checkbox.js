// @flow
import React from 'react';
import { SingleProp } from '../../../lib/types/forms';

const CheckboxComponent = ({ onHandleInputChange }: SingleProp) => {

  return (
    <div>
      <input type="checkbox" name="userTest" onChange={(e) => {
        if (e.target.checked) {
          e.target.value = true
          return onHandleInputChange(e.target.value, e.target.name);
        } else {
          e.target.value = false
          return onHandleInputChange(e.target.value, e.target.name)
        }
      }
      } />
      <label for="test">I acknowledge that this is only a test.</label>
    </div>
  )
}

export default CheckboxComponent;