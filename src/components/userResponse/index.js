import React from 'react';
import { connect } from 'react-redux';

const UserResponse = ({ firstName }) => {
  return (
    <div>
      <h1>Intelage Application Successful</h1>
      <h2>This is going to work!!</h2>
    </div>
  )
};

const mapStateToProps = (state) => ({
  ...state,
})

export default connect(mapStateToProps, null)(UserResponse)