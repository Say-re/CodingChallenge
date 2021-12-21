import React from 'react';
import JobForm from '../containers/form';
import UserResponse from './userResponse';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobForm />} />
        <Route path="form" element={<UserResponse />} />
        <Route path="form-submit" element={<Navigate replace to="/form" />} />
      </Routes>
    </BrowserRouter>
  )
};