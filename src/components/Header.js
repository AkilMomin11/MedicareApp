import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   
    <header>
      <h1>Medicare Website</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/social">Social Connectivity</Link></li>
          <li><Link to="/resources">Local Resources</Link></li>
          <li><Link to="/yoga">Yoga</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;