import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './LawyerList.css';

const LawyerList = ({ onSelectLawyer, onShowAppointments }) => {
  const lawyers = useSelector((state) => state.lawyers);
  const [notification, setNotification] = useState('');

  // Function to show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');  // Clear notification after 3 seconds
    }, 3000);
  };

  const handleSelect = (lawyer) => {
    if (lawyer.availability > 0) {
      onSelectLawyer(lawyer);
    } else {
      showNotification('No slots available, cannot book this lawyer.');
    }
  };

  return (
    <div className="container mt-5">
      <h1>LAWYER LIST</h1>

      {/* Notification Section */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      <ul className="list-group">
        {lawyers.map((lawyer) => (
          <li
            key={lawyer.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong><i className="fas fa-user-tie"></i> {lawyer.name}</strong> - {lawyer.specialty}
              <span className="badge ms-2">Available Slots: {lawyer.availability}</span>
            </div>
            <div>
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => handleSelect(lawyer)}  // Call handleSelect for booking
              >
                <i className="fas fa-arrow-right"></i> Select
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => onShowAppointments(lawyer)}
              >
                <i className="fas fa-calendar-alt"></i> Show Appointments
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerList;

{/*  developed by AYUSH GIRI
     ayushgiri698@gmail.com
     contact : 9914165162 
  
*/}