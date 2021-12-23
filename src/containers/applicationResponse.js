// @flow

import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import { MainWrapper } from '../styled-components/forms/form-wrappers'
import UserApplication from '../components/userApplication/index'

// Types
import type { InputProps } from '../lib/types/forms';

//Construct Response to Form Submission Displaying User Inputs
const ApplicationResponse = ({ firstName, lastName, userEmail, userAddress, userCity, userState, userZipcode, userTelephone, userJob, userExperience, userTechnologyExperience, userShortAnswer, userTest }: InputProps) => {
  const { pathname } = useLocation();
  //Used useEffect to save time but would have like to make a class version of this
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <Fragment>
      <header className="navBar"><span className="applicationHeading">Intelage Coding Challenge</span></header>
      <MainWrapper>
        <h1>Intelage Application Submission Successful</h1>
        <p className="topMes">Thank you for submitting your application. To resubmit the application <Link to="/">Click Here</Link>.</p>
        <UserApplication
          firstName={firstName}
          lastName={lastName}
          userEmail={userEmail}
          userAddress={userAddress}
          userCity={userCity}
          userState={userState}
          userZipcode={userZipcode}
          userTelephone={userTelephone}
          userJob={userJob}
          userExperience={userExperience}
          userTechnologyExperience={userTechnologyExperience}
          userShortAnswer={userShortAnswer}
          userTest={userTest} />
      </MainWrapper>
    </Fragment>
  )
};


const mapStateToProps = (state) => ({
  ...state,
})

export default connect(mapStateToProps,)(ApplicationResponse)