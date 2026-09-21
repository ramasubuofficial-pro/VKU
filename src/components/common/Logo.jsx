import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import vkuLogo from '../../assets/images/vkulogo.png';

const colors = ['text-vku-white', 'text-vku-orange', 'text-vku-green'];

const Logo = ({ className = '' }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="bg-white p-1.5 rounded-lg shadow-sm">
        <img src={vkuLogo} alt="VKU Logo" className="h-8 w-auto object-contain" />
      </div>
      <div className={`text-4xl font-bold tracking-tight flex items-center transition-colors duration-1000 ${colors[colorIndex]}`}>
        VKU
      </div>
    </Link>
  );
};

export default Logo;
