import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !date || !timeSlot) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit({ name, phoneNumber, date, timeSlot });
  };

  return (
    <div className="appointment-form-container">
      <h3>Book Appointment with {doctorName}</h3>
      <p>{doctorSpeciality}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time Slot</label>
          <select
            className="form-control"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;