import React, { useState } from 'react';


const YogaPage = () => {

  const yogaPlan = [
    
    {
      id: 1,
      day: 'Day 1',
      poses: [
        {
          id: 1,
          name: 'Mountain Pose',
          image: 'mountain.jpg'
        },
        {
          id: 2,
          name: 'Tree Pose',
          image: 'tree.jpg'
        },
        
      ]
    },
    {
      id: 2,
      day: 'Day 2',
      poses: [
        {
          id: 3,
          name: 'Bird Dog',
          image: 'bird-dog.jpg'
        },
        {
          id: 4,
          name: 'Downward Facing',
          image: 'downward.jpg'
        },
        
      ]
    },

    {
        id: 3,
        day: 'Day 3',
        poses: [
          {
            id: 5,
            name: 'Sphinx',
            image: 'sphinx.jpg'
          },
          {
            id: 6,
            name: 'Cobblers Pose',
            image: 'cobblers.jpg'
          },
        
        ]
      },

      {
        id: 4,
        day: 'Day 4',
        poses: [
          {
            id: 7,
            name: 'Savasana',
            image: 'savasana.jpg'
          },
          {
            id: 8,
            name: 'Child Pose',
            image: 'child.jpg'
          },
         
        ]
      },
      {
        id: 5,
        day: 'Day 5',
        poses: [
          {
            id: 9,
            name: 'Warrior I',
            image: 'warrior.jpg'
          },
          {
            id: 10,
            name: 'Cobblers Pose',
            image: 'cobblers.jpg'
          },
          
        ]
      },
      {
        id: 6,
        day: 'Day 6',
        poses: [
          {
            id: 11,
            name: 'Sphinx',
            image: 'sphinx.jpg'
          },
          {
            id: 12,
            name: 'Bird Dog',
            image: 'bird-dog.jpg'
          },
          
        ]
      },
    
  ];

  const [selectedPose, setSelectedPose] = useState(null);

  const handlePoseClick = (pose) => {
    
    setSelectedPose(pose);
  };

  return (
    <div>
      <h2>6-Day Yoga Plan</h2>
      {yogaPlan.map((day) => (
        <div key={day.id}>
          <h3>{day.day}</h3>
          <ul>
            {day.poses.map((pose) => (
              <li key={pose.id} onClick={() => handlePoseClick(pose)}>
                {pose.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {selectedPose && (
        <div>
          <h3>{selectedPose.name}</h3>
          <img src={`./images/${selectedPose.image}`} alt={selectedPose.name} />
          </div>
      )}
    </div>
  );
};

export default YogaPage;
