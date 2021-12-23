// @flow

import React, { Fragment } from 'react';
import { defaultFormFields } from '../constants/form-fields';
import TextInputComponent from '../components/forms/fields/textInput';
import SelectOptionComponent from '../components/forms/fields/select';
import RadioSelectorComponent from '../components/forms/fields/radioSelector';
import MultiSelectComponent from '../components/forms/fields/multiSelect';
import TextareaComponent from '../components/forms/fields/textarea';
import CheckboxComponent from '../components/forms/fields/checkbox';
import { MainWrapper, FieldWrapper, FieldSubWrapper, FieldSubWrapper2, TopFieldWrapper, BottomFieldWrapper, PartOneWrapper, BlockFormFieldsWrapper } from '../styled-components/forms/form-wrappers';
import { connect } from 'react-redux';
import { handleInputChange } from '../lib/actions';
import { useNavigate } from 'react-router-dom';
import { sampleAPI } from '../helpers';

// Types 
import type { TopFormField, SecondaryAddressField, SelectOptionProps } from '../lib/types/forms';


const { topFields, secondaryAddressFields, addressField, telephoneField } = defaultFormFields;

const JobForm = ({ onHandleInputChange, userJob }: SelectOptionProps) => {
  let navigate = useNavigate();
  return (
    <Fragment>
      <div className="navBar"><span className="applicationHeading">Intelage Coding Challenge</span></div>
      <MainWrapper>
        <p className="topMes">Please fill out the following form to be considered for the Junior Developer Position.</p>
        <form action='https://reqres.in/api/application' method="POST" id='applicationForm' name='applicationForm' onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget
          const url = form.action
          const formData = new FormData(form)
          const mockResponse = sampleAPI(url, formData);
          console.log(mockResponse);
          navigate('/form');
        }}>
          <PartOneWrapper>
            <TopFieldWrapper>
              {topFields.map((field: TopFormField, index: number) => {
                return (
                  <FieldSubWrapper key={index} >
                    <label key={index + 5} for={field.field} className={field.label.class}>{field.label.text}</label>
                    <TextInputComponent
                      key={index}
                      type={field.type}
                      id={field.field}
                      name={field.field}
                      placeholder={field.placeholder}
                      pattern={null}
                      onHandleInputChange={onHandleInputChange} />
                  </FieldSubWrapper>
                )
              })}
            </TopFieldWrapper>
            <FieldWrapper>
              <FieldSubWrapper2 >
                <label for={addressField.field} className={addressField.label.class}>Address</label>
                <TextInputComponent type={addressField.type}
                  id={addressField.field}
                  name={addressField.field}
                  placeholder={addressField.placeholder}
                  pattern={null}
                  onHandleInputChange={onHandleInputChange} />
              </FieldSubWrapper2>
              <FieldSubWrapper>
                <label for={telephoneField.field} className={telephoneField.label.class}>{telephoneField.label.text}</label>
                <TextInputComponent
                  type={telephoneField.type}
                  id={telephoneField.field}
                  name={telephoneField.field}
                  pattern={telephoneField.pattern}
                  placeholder={telephoneField.placeholder}
                  onHandleInputChange={onHandleInputChange} />
              </FieldSubWrapper>
            </FieldWrapper>
            <BottomFieldWrapper>
              {secondaryAddressFields.map((field: SecondaryAddressField, index: number) => {
                return (
                  <FieldSubWrapper key={index} >
                    <label key={index + 5} for={field.field} className={field.label.class}>{field.label.text}</label>
                    <TextInputComponent
                      key={index}
                      type={field.type}
                      id={field.field}
                      name={field.field}
                      placeholder={field.placeholder}
                      pattern={null}
                      onHandleInputChange={onHandleInputChange}
                    />
                  </FieldSubWrapper>
                )
              })}
            </BottomFieldWrapper>
          </PartOneWrapper>
          <BlockFormFieldsWrapper>
            <SelectOptionComponent onHandleInputChange={onHandleInputChange} userJob={userJob} />
            <RadioSelectorComponent onHandleInputChange={onHandleInputChange} />
            <MultiSelectComponent onHandleInputChange={onHandleInputChange} />
            <TextareaComponent onHandleInputChange={onHandleInputChange} />
            <CheckboxComponent onHandleInputChange={onHandleInputChange} />
          </BlockFormFieldsWrapper>
          <button type="submit">Submit Application</button>
        </form>
      </MainWrapper>
    </Fragment>
  )
};

const mapDispatchToProps = (dispatch) => ({
  onHandleInputChange: (updateValue: any, updateField: string) => dispatch(handleInputChange(updateValue, updateField)),
})

const mapStateToProps = (state) => ({
  ...state,
})

export default connect(mapStateToProps, mapDispatchToProps)(JobForm)