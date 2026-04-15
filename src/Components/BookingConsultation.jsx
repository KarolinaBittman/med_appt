import React, { useState } from 'react';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';

const doctors = [
  { name: "Dr. John Smith", speciality: "Dentist", experience: 10, ratings: 4.5 },
  { name: "Dr. Sarah Johnson", speciality: "Gynecologist/obstetrician", experience: 8, ratings: 4.8 },
  { name: "Dr. Mike Wilson", speciality: "General Physician", experience: 15, ratings: 4.2 },
  { name: "Dr. Emily Brown", speciality: "Dermatologist", experience: 6, ratings: 4.7 },
  { name: "Dr. David Lee", speciality: "Ear-nose-throat (ent) Specialist", experience: 12, ratings: 4.4 },
  { name: "Dr. Lisa Chen", speciality: "Homeopath", experience: 9, ratings: 4.3 },
  { name: "Dr. James Taylor", speciality: "Ayurveda", experience: 11, ratings: 4.6 },
];

const BookingConsultation = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  return (
    <div>
      <FindDoctorSearch />
      <div className="doctor-cards-container">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            speciality={doctor.speciality}
            experience={doctor.experience}
            ratings={doctor.ratings}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingConsultation;