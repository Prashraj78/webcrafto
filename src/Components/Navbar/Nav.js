import React, { useState } from 'react';
import './Nav.css';
import logo from '../../Assets/LOGO.png';
import { FiMenu, FiX } from 'react-icons/fi';
import NavMenuContent from './NavMenuContent'; // Import the NavMenuContent component

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`n-main ${menuOpen ? 'menu-open' : ''}`}>
      <div className='imga-logo'>
        <img src={logo} alt="" height='36px' width='120px' />
      </div>
      <div className='nav-page'>
        <p className='home'>HOME</p>
        <p>ABOUT US</p>
        <p>SERVICES</p>
        <p>PORTFOLIO</p>
        <p>CONTACT</p>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <FiX size={36} /> : <FiMenu size={36} />}
      </div>
      
      {/* Conditional rendering of the menu content */}
      {menuOpen && <NavMenuContent />}
    </div>
  );
}

export default Nav;
