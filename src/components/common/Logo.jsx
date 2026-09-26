import React from 'react';
import { Link } from 'react-router-dom';
import vkuLogo from "../../assets/images/vkulogo.jpeg";

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="bg-white p-1.5 rounded-lg shadow-sm">
        <img src={vkuLogo} alt="VKU Logo" className="h-8 w-auto object-contain" />
      </div>
      <div className="text-4xl font-bold tracking-tight flex items-center text-vku-orange">
        VKU
      </div>
    </Link>
  );
};

export default Logo;