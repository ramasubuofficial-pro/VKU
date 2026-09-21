import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';

const DesktopNav = () => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex space-x-12 ml-auto">
      {navigationLinks.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
              isActive
                ? 'text-vku-white'
                : 'text-vku-text-muted hover:text-vku-white'
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
