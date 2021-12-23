// @flow
import React from 'react';
import { technologyExperience } from '../../../constants/form-fields';
import type { SingleProp } from '../../../lib/types/forms';

type SingleObject = {
  [key: string]: string
}

const MultiSelectComponent = ({ onHandleInputChange }: SingleProp) => {
  return (
    <div id='multiselectWrapper'>
      <label for='codingExperience'>Please Select Coding Experience - select all that apply</label>
      <select id='codingExperience' multiple={true} size={technologyExperience.length} required onChange={(e) => {
        let selection = [];
        for (let option of e.target.options) {
          if (option.selected) {
            selection.push(option.value);
          }
        }
        onHandleInputChange(selection, 'userTechnologyExperience')
      }}>
        {technologyExperience.map((technology: SingleObject, index: number) => {
          return (
            <option key={index} value={technology.technology}>{technology.technology}</option>
          )
        })}
      </select>
    </div>
  )
};

export default MultiSelectComponent;