// @flow

import React from 'react';
import { jobs } from '../../../constants/form-fields'
import type { SelectOptionProps } from '../../../lib/types/forms';


const SelectOptionComponent = ({ userJob, onHandleInputChange }: SelectOptionProps) => {
  if (!userJob) userJob = "";

  return (
    <div className="blockFormFields">
      <label for="job-select">Select Job Title</label>
      <select id="job-select" name='jobs' required onChange={(e) => onHandleInputChange(e.target.value, 'userJob')}>
        {jobs.map((job: Object, index: number) => {
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