import React from 'react';
import { technologyExperience } from '../../../constants/form-fields';

const MultiSelectComponent = ({ onUpdateFormField }) => {
  return (
    <div id='multiselectWrapper'>
      <label for='codingExperience'>Please Select Coding Experience - select all that apply</label>
      <select id='codingExperience' multiple={true} size={technologyExperience.length} onChange={() => {
        let selection = [];
        for (let option of document.getElementById('codingExperience').options) {
          if (option.selected) {
            selection.push(option.value);
          }
        }
        onUpdateFormField(selection, 'codingExperience')
      }}>
        {technologyExperience.map((technology, index) => {
          return (
            <option value={technology.technology}>{technology.technology}</option>
          )
        })}
      </select>
    </div>
  )
};

export default MultiSelectComponent;