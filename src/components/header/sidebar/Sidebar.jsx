// Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';
import { FaFutbol, FaTimesCircle, FaEllipsisH } from 'react-icons/fa';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Desktop Sidebar */}
      <div className="sidebar">
        <p>FOOTBALL</p>
        <ul>
          <li>
            <FaFutbol />
            <a href="/uefa-champions-league">UEFA Champions League</a>
          </li>
          <li>
            <FaFutbol />
            <a href="/uefa-europa-league">UEFA Europa League</a>
          </li>
          <li>
            <FaFutbol />
            <a href="/uefa-conference-league">UEFA Conference League</a>
          </li>
          <li>
            <FaFutbol />
            <a href="/english-premier-league">Premier League</a>
          </li>
          <li>
            <FaFutbol />
            <a href="/spain-laliga">LaLiga</a>
          </li>
          <li>
            <FaFutbol />
            <a href="/germany-bundesliga">Bundesliga</a>
          </li>
          <li>
            <FaFutbol />
            <a href="/copa-libertadores">Serie A</a>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="navbar-mobile">
        <div className="navbar-mobile-content">
          <ul>
            <li><FaFutbol /><a href="/uefa-champions-league">UEFA Champ</a></li>
            <li><FaFutbol /><a href="/uefa-europa-league">UEFA Europa</a></li>
            <li><FaFutbol /><a href="/uefa-conference-league">UEFA Conf</a></li>
            <li><FaFutbol /><a href="/english-premier-league">EPL</a></li>
            <li><FaFutbol /><a href="/spain-laliga">LaLiga</a></li>
          </ul>
           <div className="menu-icon" onClick={handleMenuClick}>
             {menuOpen ? <FaTimesCircle /> : <FaEllipsisH />}
           </div>
        </div>
      </div>

      {/* Sidebar overlay when menu is open */}
      {menuOpen && (
        <div className="sidebar-overlay">
          <div className="sidebar-content">
             <div className="sidebar-head">
               <div className="sidebar-header">
                  <FaTimesCircle className="close-icon" onClick={handleMenuClick} />
               </div>
               <div className="logo">
                 <span className="brand">foot</span><span className="highlight">ball</span>
               </div>
             </div>
             <p className='sidebar-p'>FOOTBALL</p>
             <div className="separator-line"></div>
             <ul>
               <li><FaFutbol /><a href="/uefa-champions-league">UEFA Champions League</a></li>
               <li><FaFutbol /><a href="/uefa-europa-league">UEFA Europa League</a></li>
               <li><FaFutbol /><a href="/uefa-conference-league">UEFA Conference League</a></li>
               <li><FaFutbol /><a href="/english-premier-league">Premier League</a></li>
               <li><FaFutbol /><a href="/spain-laliga">LaLiga</a></li>
               <li><FaFutbol /><a href="/germany-bundesliga">Bundesliga</a></li>
               <li><FaFutbol /><a href="/copa-libertadores">Serie A</a></li>
              </ul>
           </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;