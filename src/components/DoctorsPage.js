import React, { useState } from 'react';


const DoctorPage = () => {
  
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const cities = ['Pune', 'Mumbai', 'Nagpure'];
  
  const doctorsByCity = {
    'Pune': [
      {
        id: 1,
        name: 'Dr Shailesh Chaugule' ,
        specialization: 'Cardiology',
        address: 'Karve Nagar, Rahul Nagar Kothrud',
        contact : '989796959'
      },
      {
        id: 2,
        name: 'Dr. Jyoti Shetty',
        specialization: 'Dermatology',
        address: 'Somwar Peth, Pune',
        contact : '9654806959'
      }
    ],
    'Mumbai': [
      {
        id: 3,
        name: 'Dr Aabha Nagral',
        specialization: 'OMBBS, MD, DNB (Gastro),',
        address: 'Apollo Hospitals CBD Belapur,Mumbai',
        contact : '889796959'
      },
      {
        id: 4,
        name: 'Dr. Dilip Vaswani',
        specialization: 'Gynecology',
        address: 'Bombay Hospital, 12, Vitthaldas',
        contact : '8995469590'
      }
    ],
    'Nagpure': [
      {
        id: 5,
        name: 'Dr.Meenesh Juvekar',
        specialization: 'Neurology',
        address: 'West High Court Road,Nagpure',
        contact : '979796959'
      },
      {
        id: 6,
        name: 'Dr. Shama Mujawar',
        specialization: 'General Physician',
        address: 'Great Nag Rd Beside Hotel Orient Taibah',
        contact : '8789096959'
      }
    ]
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedDoctor(null);
  };

  const handleDoctorClick = (doctor) => {
  
    setSelectedDoctor(doctor);
  };

  return (
    <div>
      <h2>Doctors</h2>
      <div>
        <label>Select City: </label>
        <select value={selectedCity} onChange={(e) => handleCityChange(e.target.value)}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      {selectedCity && (
        <div>
          <h3>Doctor List in {selectedCity}</h3>
          <ul>
            {doctorsByCity[selectedCity].map((doctor) => (
              <li key={doctor.id} onClick={() => handleDoctorClick(doctor)}>
                {doctor.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedDoctor && (
        <div>
          <h3>{selectedDoctor.name}</h3>
          <p>Specialization: {selectedDoctor.specialization}</p>
          <p>Address: {selectedDoctor.address}</p>
          <p>Contact: {selectedDoctor.contact}</p>
        </div>
      )}
     
    </div>
  );
};

export default DoctorPage;
