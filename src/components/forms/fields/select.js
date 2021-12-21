import React from 'react';
import { connect } from 'react-redux'
import { jobs } from '../../../constants/form-fields'


const SelectOptionComponent = ({ userJob, onUpdateFormField }) => {
  console.log(userJob);
  return (
    <div id="selectOptions">
      <label for="job-select">Select Job Title</label>
      <select id="job-select" name='jobs' onChange={() => onUpdateFormField(document.getElementById('job-select').value, 'userJob')}>
        {jobs.map((job, index) => {
          if (job.title === userJob) {
            return (
              <option key={index} value={job.title}>{job.title}</option>
            )
          } else {
            return (
              <option key={index} value={job.title}>{job.title}</option>
            )
          }
        })}
      </select>
    </div>
  )
};

export default SelectOptionComponent;