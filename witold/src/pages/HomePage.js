import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1>Welcome to Barber Services</h1>
        <p>Discover the best barbers in town and book your appointment today.</p>
        <Link to="/barbers">View Barbers</Link>
      </div>
    </div>
  );
};

export default HomePage;