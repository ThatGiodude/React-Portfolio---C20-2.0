import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <h1>Giovanni F.</h1>
      <nav>
        <ul>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Experience">Experience</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;