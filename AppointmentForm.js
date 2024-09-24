import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAppointment } from '../redux/lawyerSlice';

const AppointmentForm = ({ lawyer }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showNotification, setShowNotification] = useState(false);  // New state for notification
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAppointment({ date, time, lawyer }));
    setDate('');
    setTime('');

    // Show notification for 3 seconds
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="appointment-form">
      {showNotification && (
        <div className="notification">
          Appointment booked successfully with {lawyer.name}!
        </div>
      )}
      <h3>Book Appointment with {lawyer.name}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;

{/*  developed by AYUSH GIRI
     ayushgiri698@gmail.com
     contact : 9914165162 
  
*/}