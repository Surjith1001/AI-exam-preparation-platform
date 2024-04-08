import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  console.log('Link Path to Login:', '/login');
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GateCrackAI
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/study-plan" className="nav-links">
              Study Plan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/personalized-study-plan" className="nav-links">
              Personalized Study Plans
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-links">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
