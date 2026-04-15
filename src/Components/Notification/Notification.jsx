import React from 'react';
import './Notification.css';

const Notification = () => {
  const appointment = JSON.parse(sessionStorage.getItem("appointment"));
  if (!appointment) return null;

  return (
    <div className="notification-container">
      <p>
        Appointment booked! Patient: <strong>{appointment.name}</strong> — Date: <strong>{appointment.date}</strong> at <strong>{appointment.timeSlot}</strong>
      </p>
    </div>
  );
};

export default Notification;