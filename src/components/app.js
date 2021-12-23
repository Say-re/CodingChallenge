// @flow

import React from 'react';
import JobForm from '../containers/form';
import ApplicationResponse from '../containers/applicationResponse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobForm />} />
        <Route path="form" element={<ApplicationResponse />} />
      </Routes>
    </BrowserRouter>

  )
};