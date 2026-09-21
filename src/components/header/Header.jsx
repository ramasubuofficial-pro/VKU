import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Container from '../common/Container';
import Logo from '../common/Logo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#59595b] shadow-md py-4' 
            : 'bg-[#59595b] py-6'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            
            <div className="flex items-center">
              <DesktopNav />
              
              <button 
                className="md:hidden ml-8 p-2 text-vku-white hover:text-vku-orange focus:outline-none"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleCloseMobileMenu} 
      />
    </>
  );
};

export default Header;
