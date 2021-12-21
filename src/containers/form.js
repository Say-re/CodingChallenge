import React from 'react';
import { defaultFormFields } from '../constants/form-fields';
import TextInputComponent from '../components/forms/fields/textInput';
import SelectOptionComponent from '../components/forms/fields/select';
import RadioSelectorComponent from '../components/forms/fields/radioSelector';
import MultiSelectComponent from '../components/forms/fields/multiSelect';
import TextareaComponent from '../components/forms/fields/textarea';
import CheckboxComponent from '../components/forms/fields/checkbox';
import { MainWrapper, NameWrapper, AddressWrapper, PartOneWrapper } from '../styled-components/forms/form-wrappers';
import { connect } from 'react-redux';
import { updateFormField } from '../lib/actions';
import { useNavigate } from 'react-router-dom';

const { topFields, secondaryAddressFields, addressField } = defaultFormFields;

const JobForm = ({ onUpdateFormField, userJob }) => {
  let navigate = useNavigate()
  return (
    <MainWrapper>
      <h1>Intelage Coding Challenge</h1>
      <h5>Please fill out the following form to be considered for the Junior Developer Position.</h5>
      <form encType="multipart/form-data" action="/form-submit" method="POST" id='applicationForm' name='applicationForm' onSubmit={(e) => {
        e.preventDefault();
        navigate('/form');
      }}>
        <PartOneWrapper>
          <NameWrapper>
            {topFields.map((field, index) => {
              return (
                <div className="nameSubWrapper">
                  <label for={field.field} className={field.label.class}>{field.label.text}</label>
                  <TextInputComponent
                    type={field.type}
                    id={field.field}
                    name={field.field}
                    placeholder={field.placeholder}
                    onUpdateFormField={onUpdateFormField} />
                </div>
              )
            })}
          </NameWrapper>
          <AddressWrapper>
            <div className="subWrapper2">
              <label for={addressField.field} className={addressField.label.class}>Address</label>
              <TextInputComponent type={addressField.type}
                id={addressField.field}
                name={addressField.field}
                placeholder={addressField.placeholder}
                onUpdateFormField={onUpdateFormField} />
            </div>
            <div id="phoneWrapper">
              <label for="userTelephone" className='blck-label'>Phone Number</label>
              <TextInputComponent
                type="tel"
                id="userTelephone"
                name="userTelephone"
                onUpdateFormField={onUpdateFormField} />
            </div>
          </AddressWrapper>
          <AddressWrapper>
            {secondaryAddressFields.map((field, index) => {
              return (
                <div className="addSubWrapper">
                  <label for={field.field} className={field.label.class}>{field.label.text}</label>
                  <TextInputComponent
                    type={field.type}
                    id={field.field}
                    name={field.field}
                    placeholder={field.placeholder}
                    onUpdateFormField={onUpdateFormField}
                  />
                </div>
              )
            })}
          </AddressWrapper>
        </PartOneWrapper>
        <div id="jobTitleWrapper">
          <SelectOptionComponent onUpdateFormField={onUpdateFormField} userJob={userJob} />
        </div>
        <div id="yearsDevleopingWrapper">
          <RadioSelectorComponent onUpdateFormField={onUpdateFormField} />
        </div>
        <div>
          <MultiSelectComponent onUpdateFormField={onUpdateFormField} />
        </div>
        <div>
          <TextareaComponent onUpdateFormField={onUpdateFormField} />
        </div>
        <div>
          <CheckboxComponent />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </MainWrapper>
  )
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateFormField: (updateValue, updateField) => dispatch(updateFormField(updateValue, updateField))
})

const mapStateToProps = (state) => ({
  ...state,
})

export default connect(mapStateToProps, mapDispatchToProps)(JobForm)