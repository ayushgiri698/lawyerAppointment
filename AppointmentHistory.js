import React from 'react';

const AppointmentHistory = ({ lawyer }) => {
  return (
    <div className="container mt-5">
      <h3>Appointment History for {lawyer.name}</h3>
      {lawyer.appointments.length > 0 ? (
        <ul className="list-group">
          {lawyer.appointments.map((appointment, index) => (
            <li key={index} className="list-group-item">
              <i className="fas fa-calendar-check"></i> {appointment.date} at {appointment.time}
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-info">
          <i className="fas fa-info-circle"></i> No appointments yet
        </div>
      )}
    </div>
  );
};

export default AppointmentHistory;

{/*  developed by AYUSH GIRI
     ayushgiri698@gmail.com
     contact : 9914165162 
  
*/}