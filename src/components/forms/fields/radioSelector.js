import React from 'react';
import { defaultFormFields as dFF } from '../../../constants/form-fields'

const { userExperience } = dFF;
const RadioSelectorComponent = ({ onUpdateFormField }) => {
  return (
    <div>
      <p>Please choose the number of years you have been developing:</p>
      <div className="radio">
        <input type="radio" id="one" name="experienceLevel" value={userExperience[0]} onBlur={() => {
          onUpdateFormField(userExperience[0], "userExperience")
        }} />
        <label for="one">{userExperience[0]}</label>
      </div>
      <div className="radio">
        <input type="radio" id="two" name="experienceLevel" value={userExperience[1]} onBlur={() => {
          onUpdateFormField(userExperience[1], "userExperience")
        }} />
        <label for="two">{userExperience[1]}</label>
      </div>
      <div className="radio">
        <input type="radio" id="three" name="experienceLevel" value={userExperience[2]} onBlur={() => {
          onUpdateFormField(userExperience[2], "userExperience")
        }} />
        <label for="three">{userExperience[2]}</label>
      </div>
      <div className="radio">
        <input type="radio" id="four" name="experienceLevel" value={userExperience[3]} onBlur={() => {
          onUpdateFormField(userExperience[3], "userExperience")
        }} />
        <label for="four">{userExperience[3]}</label>
      </div>
    </div>
  )
};

export default RadioSelectorComponent;