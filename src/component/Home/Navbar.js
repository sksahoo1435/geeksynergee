import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/company-info" className="navbar-link">Company Info</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
