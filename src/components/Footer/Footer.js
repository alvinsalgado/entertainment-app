import React from 'react';
import { images } from '../../utils/images';
import './Footer.scss';
const Footer = () => {
  return (
    <footer className='footer'>
      <p className='fs-500'>Powered by</p>
      <img src={images.tmdb} alt='logo' />
    </footer>
  );
};

export default Footer;
