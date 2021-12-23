// @flow
import React from 'react';
import { SingleProp } from '../../../lib/types/forms';

const CheckboxComponent = ({ onHandleInputChange }: SingleProp) => {

  return (
    <div className="blockFormFields">
      <input type="checkbox" name="userTest" onChange={(e) => {
        if (e.target.checked) {
          e.target.value = "Yes"
          return onHandleInputChange(e.target.value, e.target.name);
        } else {
          e.target.value = "No"
          return onHandleInputChange(e.target.value, e.target.name)
        }
      }
      } />
      <label for="test">I acknowledge that this is only a test.</label>
    </div>
  )
}

export default CheckboxComponent;