import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
         
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>
          
            <li className = 'nav-item'>
              <Link
                to='/order'
                className='nav-links'
                onClick={closeMenu}
              >
                ORDER
              </Link>
            </li>
          </ul>

        </div>
        <Link to='/' className='navbar-logo' onClick={closeMenu}>
            <img src = "food_house.png" width = '300' height = '300'></img>
           
          </Link>
      </nav>
    </>
  );
}

export default Navbar;