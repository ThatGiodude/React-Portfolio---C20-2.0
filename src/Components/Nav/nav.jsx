import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/Experience">Experience</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;