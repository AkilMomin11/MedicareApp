import React, { useState } from 'react';

const LocalResourcesPage = () => {
  const cities = [
    {
      id: 1,
      name: 'Pune',
      areas: [
        { id: 1, name: 'Deccan', pincode: '411013' },
        { id: 2, name: 'Karvenagar', pincode: '411011' },
        { id: 2, name: 'swargate', pincode: '411017' },
       
      ]
    },
    {
      id: 2,
      name: 'Mumbai',
      areas: [
        { id: 3, name: 'Dadar Station', pincode: '400001' },
        { id: 4, name: 'Bhaikhala', pincode: '400005' },
        
      ]
    },
   
  ];

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [medicalStores, setMedicalStores] = useState([]);
  const [ambulanceServices, setAmbulanceServices] = useState([]);
  const [emergencyCalling, setEmergencyCalling] = useState(false);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedArea(null);
    setMedicalStores([]);
    setAmbulanceServices([]);
  };

  const handleAreaChange = (area) => {
    setSelectedArea(area);
    setMedicalStores(getMedicalStores(area)); // Fetch medical stores based on the selected area
    setAmbulanceServices(getAmbulanceServices(area)); // Fetch ambulance services based on the selected area
  };

  const handleEmergencyCall = () => {
    // Code to initiate an emergency call to the ambulance service
    setEmergencyCalling(true);
    // Implement your logic to call the ambulance service here
  };

  const getMedicalStores = (area) => {
    
    return [
      { id: 1, name: 'Medical 1', address: 'Deccan' },
      { id: 2, name: 'Medical 2', address: 'Karvenagar' },
      
    ];
  };

  const getAmbulanceServices = (area) => {
    // Code to fetch ambulance services based on the selected area
    // Replace this with your actual logic to retrieve ambulance services
    return [
      { id: 1, name: 'Ambulance A', contact: '984567890' },
      { id: 2, name: 'Ambulance B', contact: '9876543210' },
      
    ];
  };

  return (
    <div>
      <h2>Local Resources</h2>
      <h3>Select City:</h3>
      <select onChange={(e) => handleCityChange(e.target.value)}>
        <option value="">-- Select City --</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      {selectedCity && (
        <div>
          <h3>Select Area:</h3>
          <select onChange={(e) => handleAreaChange(e.target.value)}>
            <option value="">-- Select Area --</option>
            {cities
              .find((city) => city.name === selectedCity)
              .areas.map((area) => (
                <option key={area.id} value={area.name}>
                  {area.name} ({area.pincode})
                </option>
              ))}
          </select>
        </div>
      )}
      {selectedArea && (
        <div>
          <h3>Medical Stores:</h3>
          {medicalStores.length > 0 ? (
            <ul>
              {medicalStores.map((store) => (
                <li key={store.id}>
                  <strong>{store.name}</strong>
                  <br />
                  {store.address}
                </li>
              ))}
            </ul>
          ) : (
            <p>No medical stores found.</p>
          )}

          <h3>Ambulance Services:</h3>
          {ambulanceServices.length > 0 ? (
            <ul>
              {ambulanceServices.map((service) => (
                <li key={service.id}>
                  <strong>{service.name}</strong>
                  <br />
                  Contact: {service.contact}
                </li>
              ))}
            </ul>
          ) : (
            <p>No ambulance services found.</p>
          )}

          <button onClick={handleEmergencyCall} disabled={emergencyCalling}>
            {emergencyCalling ? 'Calling Ambulance...' : 'Emergency'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LocalResourcesPage;
