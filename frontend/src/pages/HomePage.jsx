// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <h1 className="text-center">Welcome to Healthcare Appointment Booking</h1>
        <p className="text-center">Book your appointments easily.</p>
        <button className="btn btn-primary">Get Started</button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

