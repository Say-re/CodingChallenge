// @flow
import React from 'react';
import { defaultFormFields as dFF } from '../../../constants/form-fields';
import type { SingleProp } from '../../../lib/types/forms';

const RadioSelectorComponent = ({ onHandleInputChange }: SingleProp) => {
  return (
    <div className="blockFormFields">
      <p>Please choose the number of years you have been developing:</p>
      <div className="radio">
        <input type="radio" id="one" name="experienceLevel" value={dFF.userExperience[0]} onChange={() => {
          onHandleInputChange(dFF.userExperience[0], "userExperience")
        }} />
        <label for="one">{dFF.userExperience[0]}</label>
      </div>
      <div className="radio">
        <input type="radio" id="two" name="experienceLevel" value={dFF.userExperience[1]} onChange={() => {
          onHandleInputChange(dFF.userExperience[1], "userExperience")
        }} />
        <label for="two">{dFF.userExperience[1]}</label>
      </div>
      <div className="radio">
        <input type="radio" id="three" name="experienceLevel" value={dFF.userExperience[2]} onChange={() => {
          onHandleInputChange(dFF.userExperience[2], "userExperience")
        }} />
        <label for="three">{dFF.userExperience[2]}</label>
      </div>
      <div className="radio">
        <input type="radio" id="four" name="experienceLevel" value={dFF.userExperience[3]} onChange={() => {
          onHandleInputChange(dFF.userExperience[3], "userExperience")
        }} />
        <label for="four">{dFF.userExperience[3]}</label>
      </div>
    </div>
  )
};

export default RadioSelectorComponent;