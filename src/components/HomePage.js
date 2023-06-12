import React from 'react';
import second from '../images/2.jpg';
import '../styles/HomePage.css';
import first from '../images/1.jpg';


const HomePage = () => {

  const quotes = [
    "The greatest wealth is health.",
    "A healthy outside starts from the inside.",
    "Take care of your body. It's the only place you have to live.",
    "A fit body is the best fashion statement.",
    "The groundwork for all happiness is good health."
  ];

  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
   
    <div className="home-page">
      <div className="hero-section">
        <h2>Welcome Medicare Website!</h2>
        <p>Here you will find helpful information and resources.</p>
      </div>
      
      <div className="quote-section">
      <h3 >Inspiration for a Healthy Life</h3>
        <p className="quote">{randomQuote}</p>
      
      <div style={{ display: 'flex' }}>
      <img src={first} alt="first" style={{ width: '50%' }} />
      <img src={second} alt="second" style={{ width: '50%' }} />
    </div>
      </div>
     
    </div>
  );
};

export default HomePage;
