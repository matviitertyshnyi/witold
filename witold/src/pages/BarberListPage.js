import React from 'react';
import { Link } from 'react-router-dom';
import { mockBarbers } from '../mockData';


const BarberListPage = () => {
  return (
    <div>
      <div className="barber-list-page">
        <div className="barber-list-page-content">
          <h1>Available Barbers</h1>
          <ul className="barber-list">
            {mockBarbers.map((barber) => (
              <li key={barber.id} className="barber-card">
                <Link to={`/barber/${barber.id}`}>
                  <h2>{barber.name}</h2>
                  <p>{barber.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default BarberListPage;