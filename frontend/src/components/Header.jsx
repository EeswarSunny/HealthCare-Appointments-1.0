// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Healthcare App</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/appointments">Appointments</Link>
    </nav>
  </header>
);

export default Header;

