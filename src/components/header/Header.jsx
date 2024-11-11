import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import Sidebar from './sidebar/Sidebar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* First Section: Support Link for Desktop */}
      <div className="header-top">
        <a href="/support" className="support-link">Support</a>
      </div>

      {/* Second Section: Logo, Hamburger Menu, and Navigation */}
      <nav className="nav">
        <div className="nav-left">
          <div className="mobile-nav-top">
            {/* Hamburger Icon for Mobile */}
            <button className="hamburger" onClick={toggleMenu}>
              {menuOpen ? <FaTimesCircle /> : <FaBars />}
            </button>

            {/* Logo */}
            <div className="logo">
              <span className="brand">foot</span><span className="highlight">ball</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Links for Desktop */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/home">Football</a></li>
          <li><a href="/sports">Football</a></li>
          <li><a href="/fan-token">Football</a></li>
          <li><a href="/247-league">Football</a></li>
          <li><a href="/fanblog">Football</a></li>
          <li><a href="/partners">Football</a></li>
        </ul>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <a href="/login" className="login-btn">Login</a>
          <a href="/signup" className="signup-btn">Sign up</a>
        </div>
      </nav>

      {/* Sidebar Navigation for Mobile */}
      {menuOpen && (
        <div className="navbar-open">
          <div className="auth-buttons-open">
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Sign up</a>
          </div>
          <div className="separator-line"></div>
          <ul className='nav-links-open'>
            <li><a href="/home">Football</a></li>
            <li><a href="/sports">Sports</a></li>
            <li><a href="/fan-token">Football</a></li>
            <li><a href="/247-league">League</a></li>
            <li><a href="/fanblog">Football</a></li>
            <li><a href="/partners">Football</a></li>
          </ul>
          <div className="separator-line"></div>
          <div className="support-open">
            <a href="/support" className="support-link">Support</a>
          </div>
        </div>
      )}

      {/* Render Sidebar only when the mobile menu is closed */}
      {!menuOpen && <Sidebar />}
    </header>
  );
};

export default Header;