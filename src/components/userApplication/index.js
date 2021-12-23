// @flow

import React, { Fragment } from 'react';
import { FieldWrapper, PartOneWrapper, FieldSubWrapper, FieldSubWrapper2, BlockFormFieldsWrapper } from '../../styled-components/forms/form-wrappers'
import type { InputProps } from '../../lib/types/forms';

const UserApplication = ({ firstName, lastName, userEmail, userAddress, userCity, userState, userZipcode, userTelephone, userJob, userExperience, userTechnologyExperience, userShortAnswer, userTest }: InputProps) => {
  return (
    <Fragment>
      <PartOneWrapper>
        <FieldWrapper>
          <FieldSubWrapper>
            <p className="resLabel">First Name</p>
            <p className="resField">{firstName}</p>
          </FieldSubWrapper>
          <FieldSubWrapper>
            <p className="resLabel">Last Name</p>
            <p className="resField">{lastName}</p>
          </FieldSubWrapper>
          <FieldSubWrapper>
            <p className="resLabel">Email</p>
            <p className="resField">{userEmail}</p>
          </FieldSubWrapper>
        </FieldWrapper>
        <FieldWrapper>
          <FieldSubWrapper2>
            <p className="resLabel">Address</p>
            <p className="resField">{userAddress}</p>
          </FieldSubWrapper2>
          <FieldSubWrapper>
            <p className="resLabel">Phone Number</p>
            <p className="resField">{userTelephone}</p>
          </FieldSubWrapper>
        </FieldWrapper>
        <FieldWrapper>
          <FieldSubWrapper>
            <p className="resLabel">City</p>
            <p className="resField">{userCity}</p>
          </FieldSubWrapper>
          <FieldSubWrapper>
            <p className="resLabel">State</p>
            <p className="resField">{userState}</p>
          </FieldSubWrapper>
          <FieldSubWrapper>
            <p className="resLabel">Zipcode</p>
            <p className="resField">{userZipcode}</p>
          </FieldSubWrapper>
        </FieldWrapper>
      </PartOneWrapper>
      <BlockFormFieldsWrapper>
        <p className="resLabel">Job Title</p>
        <p className="resField">{userJob}</p>
        <p className="resLabel">Number of Years Developing</p>
        <p className="resField">{userExperience}</p>
        <p className="resLabel">Technology Experience</p>
        <div className="resField">
          {userTechnologyExperience.map((technology: string, index: number) => {
            return <p key={index}>{technology}</p>
          })}
        </div>
        <p className="resLabel">Describe why you are a good fit for the job you are applying for</p>
        <p className="resField">{userShortAnswer}</p>
        <p className="resLabel">I acknowledge that this is only a test</p>
        <p className="resField">{userTest}</p>
      </BlockFormFieldsWrapper>
    </Fragment>
  )
}

export default UserApplication;