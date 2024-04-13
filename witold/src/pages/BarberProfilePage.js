import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockBarbers } from '../mockData';
import { useAuth } from './AuthProvider';


const BarberProfilePage = () => {
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
    <div className="barber-profile-page">
      <div className="barber-profile-page-content">
        <div className="barber-profile-header">
          <h1>{barber.name}</h1>
          <p>{barber.description}</p>
        </div>

        <div className="barber-profile-services">
          <h2>Services and Prices</h2>
          <ul>
            {barber.services.map((service) => (
              <li key={service.id}>
                <h3>{service.name}</h3>
                <p>${service.price}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="barber-profile-timeslots">
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
        </div>

        {selectedTimeslot && (
  <div className="barber-profile-booking">
    <h2>Confirm Appointment</h2>
    <p>
      You have selected {selectedTimeslot.date} at {selectedTimeslot.time}.
    </p>
    <button onClick={handleBookAppointment}>Book Appointment</button>
  </div>
)}

        {isBookingConfirmed && (
          <div className="barber-profile-booking-confirmation">
            <h2>Appointment Booked!</h2>
            <p>
              Your appointment on {selectedTimeslot.date} at {selectedTimeslot.time} has
              been confirmed.
            </p>
          </div>
        )}

        {bookingError && (
          <div className="barber-profile-booking-error">
            <h2>Error</h2>
            <p>{bookingError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarberProfilePage;