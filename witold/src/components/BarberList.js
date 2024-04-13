import React from 'react';
import { Link } from 'react-router-dom';
import { mockBarbers } from '../mockData';

const BarberList = () => {
  return (
    <div>
      <h1>Available Barbers</h1>
      <ul>
        {mockBarbers.map((barber) => (
          <li key={barber.id}>
            <Link to={`/barber/${barber.id}`}>{barber.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarberList;