import React from 'react';
import { Link } from 'react-router-dom';
import vkuLogo from '../../assets/images/vkulogo.jpeg';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={vkuLogo}
        alt="V. K. Umbarkar & Co. - Chartered Accountants"
        className="h-24 md:h-26 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;

