import React from 'react';
import { images } from '../../utils/images';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils/data';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={images.logo} alt='logo' />
      <ul className='navbar-links'>
        {links.map((link) => {
          const { id, img, url } = link;
          return (
            <li key={id}>
              <NavLink to={url}>{img}</NavLink>;
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
