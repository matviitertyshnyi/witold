import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockBarbers } from '../mockData';
import { useAuth } from '../pages/AuthProvider';

const BarberProfile = () => {
  const { id } = useParams();
  const [selectedTimeslot, setSelectedTimeslot] = useState(null);
  const { user } = useAuth();
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  const barber = mockBarbers.find((b) => b.id === parseInt(id));

  if (!barber) {
    return <div>Loading...</div>;
  }

  const handleBookAppointment = async () => {
    try {
      // Simulate booking an appointment
      setIsBookingConfirmed(true);
      setSelectedTimeslot(null);
    } catch (error) {
      console.error('Error booking appointment:', error);
      setBookingError('Error booking appointment. Please try again later.');
    }
  };

  return (
    <div>
      <h1>{barber.name}</h1>
      <p>{barber.description}</p>
      <h2>Services and Prices</h2>
      <ul>
        {barber.services.map((service) => (
          <li key={service.id}>
            {service.name} - ${service.price}
          </li>
        ))}
      </ul>
      <h2>Available Timeslots</h2>
      <ul>
        {barber.availableTimeslots.map((timeslot) => (
          <li key={timeslot.id}>
            <button
              onClick={() => setSelectedTimeslot(timeslot)}
              className={selectedTimeslot === timeslot ? 'selected' : ''}
            >
              {timeslot.date} - {timeslot.time}
            </button>
          </li>
        ))}
      </ul>
      {selectedTimeslot && (
        <div>
          <h3>Confirm Appointment</h3>
          <p>
            You have selected {selectedTimeslot.date} at {selectedTimeslot.time}.
          </p>
          <button onClick={handleBookAppointment}>Book Appointment</button>
        </div>
      )}
      {isBookingConfirmed && (
        <div>
          <h3>Appointment Booked!</h3>
          <p>
            Your appointment on {selectedTimeslot.date} at {selectedTimeslot.time} has
            been confirmed.
          </p>
        </div>
      )}
      {bookingError && (
        <div>
          <h3>Error</h3>
          <p>{bookingError}</p>
        </div>
      )}
    </div>
  );
};

export default BarberProfile;