// @flow

import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { MainWrapper, FieldWrapper, TopFieldWrapper, PartOneWrapper, FieldSubWrapper, FieldSubWrapper2, BlockFormFieldsWrapper } from '../styled-components/forms/form-wrappers'
import { Link } from 'react-router-dom';
import type { InputProps } from '../lib/types/forms';

const ApplicationResponse = ({ firstName, lastName, userEmail, userAddress, userCity, userState, userZipcode, userTelephone, userJob, userExperience, userTechnologyExperience, userShortAnswer, userTest }: InputProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <Fragment>
      <div className="navBar"><span className="applicationHeading">Intelage Coding Challenge</span></div>
      <MainWrapper>
        <h1>Intelage Application Submission Successful</h1>
        <p className="topMes">Thank you for submitting your application. To resubmit the application <Link to="/">Click Here</Link>.</p>
        <PartOneWrapper>
          <TopFieldWrapper>
            <FieldSubWrapper>
              <h4>First Name</h4>
              <p className="resField">{firstName}</p>
            </FieldSubWrapper>
            <FieldSubWrapper>
              <h4>Last Name</h4>
              <p className="resField">{lastName}</p>
            </FieldSubWrapper>
            <FieldSubWrapper>
              <h4>Email</h4>
              <p className="resField">{userEmail}</p>
            </FieldSubWrapper>
          </TopFieldWrapper>
          <FieldWrapper>
            <FieldSubWrapper2>
              <h4>Address</h4>
              <p className="resField">{userAddress}</p>
            </FieldSubWrapper2>
            <FieldSubWrapper>
              <h4>Phone Number</h4>
              <p className="resField">{userTelephone}</p>
            </FieldSubWrapper>
          </FieldWrapper>
          <FieldWrapper>
            <FieldSubWrapper>
              <h4>City</h4>
              <p className="resField">{userCity}</p>
            </FieldSubWrapper>
            <FieldSubWrapper>
              <h4>State</h4>
              <p className="resField">{userState}</p>
            </FieldSubWrapper>
            <FieldSubWrapper>
              <h4>Zipcode</h4>
              <p className="resField">{userZipcode}</p>
            </FieldSubWrapper>
          </FieldWrapper>
          <BlockFormFieldsWrapper>
            <h4>Job Title</h4>
            <p className="resField">{userJob}</p>
            <h4>Number of Years Developing</h4>
            <p className="resField">{userExperience}</p>
            <h4>Technology Experience</h4>
            <div className="resField">
              {userTechnologyExperience.map((technology: string, index: number) => {
                return <p key={index}>{technology}</p>
              })}
            </div>
            <h4>Describe why you are a good fit for the job you are applying for</h4>
            <p className="resField">{userShortAnswer}</p>
            <h4>I acknowledge that this is only a test</h4>
            <p className="resField">{userTest}</p>
          </BlockFormFieldsWrapper>
        </PartOneWrapper>
      </MainWrapper>
    </Fragment>
  )
};


const mapStateToProps = (state) => ({
  ...state,
})

export default connect(mapStateToProps,)(ApplicationResponse)