// src/pages/AppointmentPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>

      <h2>Appointment Page</h2>
      <p>Manage your appointments here.</p>
    </div>

  );
};

export default AppointmentPage;
