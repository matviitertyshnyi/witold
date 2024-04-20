import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockBarbers } from '../mockData';

const BarberProfilePage = () => {
  const { id } = useParams();
  const [selectedTimeslot, setSelectedTimeslot] = useState(null);
  const [selectedService, setSelectedService] = useState({ name: '' });
  const [customerName, setCustomerName] = useState('');
  const [customerSurname, setCustomerSurname] = useState('');
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  const barber = mockBarbers.find((b) => b.id === parseInt(id));

  if (!barber) {
    return <div>Loading...</div>;
  }

  const handleBookAppointment = () => {
    if (!customerName || !customerSurname) {
      setBookingError('Please enter your name and surname.');
      return;
    }

    try {
      setIsBookingConfirmed(true);
      // Normally here you would save to a server or confirm booking some other way
      barber.bookedTimeslots.push({ date: selectedTimeslot.date, time: selectedTimeslot.time });
      setSelectedTimeslot(null);
      setSelectedService({ name: '' });
    } catch (error) {
      console.error('Error booking appointment:', error);
      setBookingError('Error booking appointment. Please try again later.');
    }
  };

  return (
    <div className="barber-profile-container">
      <div className="barber-profile-photo">
        <img src={barber.photoUrl} alt={barber.name} className="barber-photo" />
      </div>
      <h1 className="barber-profile-title">{barber.name}</h1>
      <p className="barber-profile-description">{barber.description}</p>

      <div className="barber-profile-services">
        <h2>Services and Prices</h2>
        <ul className="barber-profile-service-list">
          {barber.services.map((service) => (
            <li key={service.id} onClick={() => setSelectedService(service)} className="barber-profile-service-item">
              <img src={service.imageUrl} alt={service.name} className="barber-profile-service-image" />
              <div className="service-overlay">
                <h3>{service.name}</h3>
                <p className="price">${service.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedService.name && (
        <div>
          <h3>Selected Service: {selectedService.name}</h3>
          <ul className="barber-profile-available-timeslots">
            {barber.availableTimeslots.filter(
              (timeslot) =>
                !barber.bookedTimeslots.some(
                  (bookedTimeslot) =>
                    bookedTimeslot.date === timeslot.date &&
                    bookedTimeslot.time === timeslot.time
                )
            ).map(timeslot => (
              <li
                key={timeslot.id}
                onClick={() => setSelectedTimeslot(timeslot)}
                className={selectedTimeslot && selectedTimeslot.date === timeslot.date && selectedTimeslot.time === timeslot.time ? 'selected' : (barber.bookedTimeslots.some(
                  (bookedTimeslot) =>
                    bookedTimeslot.date === timeslot.date &&
                    bookedTimeslot.time === timeslot.time
                ) ? 'booked' : '')}
              >
                {timeslot.date} at {timeslot.time}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="barber-profile-booking">
        <p>Confirm Appointment</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="barber-profile-booking-input"
        />
        <input
          type="text"
          placeholder="Enter your surname"
          value={customerSurname}
          onChange={(e) => setCustomerSurname(e.target.value)}
          className="barber-profile-booking-input"
        />
        {selectedTimeslot && (
          <div>
            <p>You have selected {selectedTimeslot.date} at {selectedTimeslot.time}.</p>
            <button onClick={handleBookAppointment} className="barber-profile-booking-button">Book Appointment</button>
          </div>
        )}
      </div>

      {isBookingConfirmed && (
        <div className="barber-profile-booking-confirmation">
          <h2>Appointment Booked!</h2>
          {selectedService.name && selectedTimeslot && (
            <p>Your appointment for {selectedService.name} on {selectedTimeslot.date} at {selectedTimeslot.time} is confirmed.</p>
          )}
          <p>Name: {customerName} {customerSurname}</p>
        </div>
      )}

      <div className="barber-profile-busy-dates">
        <h3>Busy Dates</h3>
        <ul>
          {barber.bookedTimeslots.map((bookedTimeslot, index) => (
            <li key={index}>
              {bookedTimeslot.date} at {bookedTimeslot.time}
            </li>
          ))}
        </ul>
      </div>

      {bookingError && (
        <div className="barber-profile-booking-error">
          <h2>Error</h2>
          <p>{bookingError}</p>
        </div>
      )}
    </div>
  );
};

export default BarberProfilePage;
