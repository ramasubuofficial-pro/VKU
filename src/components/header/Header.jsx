import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import vkuLogo from '../../assets/images/vkulogo.jpeg';

const Header = () => {
  const location = useLocation();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#e9e7e7ef',
        borderBottom: '1px solid #ffffffff',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        boxShadow: '0 2px 10px rgba(95, 13, 13, 0.05)'
      }}
    >
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo - Clean Integration */}
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none'
          }}
        >
          <img
            src={vkuLogo}
            alt="V. K. Umbarkar & Co. - Chartered Accountants"
            style={{ 
              height: '65px', // scaled slightly for best fit in 80px navbar
              width: 'auto', 
              objectFit: 'contain',
              mixBlendMode: 'multiply'
            }}
          />
        </Link>

        {/* Navigation - Dark & Bold Text for All Items */}
        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {[
            { name: 'HOME', path: '/' },
            { name: 'ABOUT', path: '/about' },
            { name: 'SERVICES', path: '/services' },
            { name: 'BLOG', path: '/blog' },
            { name: 'CONTACT', path: '/contact' }
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActive ? '#0A192F' : '#7e858fff', // Dark slate/blue for maximum clarity
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 300,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease'
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
