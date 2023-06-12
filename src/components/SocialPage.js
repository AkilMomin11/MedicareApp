import React, { useState } from 'react';


const SocialPage = () => {
  const [selectedCity, setSelectedCity] = useState('');
  
  const cities = ['Pune', 'Mumbai', 'Nagpure'];

  const socialGroupsByCity = {
    'Pune': [
      {
        id: 1,
        name: 'Senior Book Club',
        description: 'A book club for seniors to read and discuss literature.',
        location: 'Swargate',
        schedule: 'Every Tuesday, 2:00 PM - 4:00 PM'
      },
      {
        id: 2,
        name: 'Walking Group',
        description: 'A group for seniors to enjoy walks and stay active.',
        location: 'Nana-Nani Park, Pune',
        schedule: 'Every Thursday, 10:00 AM - 11:00 AM'
      }
    ],
    'Mumbai': [
      {
        id: 3,
        name: 'Crafting Circle',
        description: 'A crafting group for seniors to create and share their crafts.',
        location: 'Senior Center, Mumbai',
        schedule: 'Every Friday, 1:00 PM - 3:00 PM'
      }
    ],
    'Nagpure': [
      {
        id: 4,
        name: 'Gardening Club',
        description: 'A club for seniors to cultivate and share their gardening skills.',
        location: 'Botanical Gardens, Nagpure',
        schedule: 'Every Wednesday, 10:00 AM - 12:00 PM'
      },
      {
        id: 5,
        name: 'Language Exchange',
        description: 'A language exchange group for seniors to practice and learn new languages.',
        location: 'Community Center, Nagpure',
        schedule: 'Every Monday, 3:00 PM - 5:00 PM'
      }
    ]
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <h2>Social Connectivity</h2>
    
      <p> Daily Activity</p>
      
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
          <h3>Social Groups in {selectedCity}</h3>
          {socialGroupsByCity[selectedCity].map((group) => (
            <div key={group.id}>
              <h4>{group.name}</h4>
              <p>{group.description}</p>
              <p>Location: {group.location}</p>
              <p>Schedule: {group.schedule}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialPage;
