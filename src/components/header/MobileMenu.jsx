import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import { X } from 'lucide-react';
import Button from '../ui/Button';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-vku-text-primary/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-vku-surface shadow-xl flex flex-col h-full transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between px-6 py-4 border-b border-vku-border">
          <span className="text-xl font-bold text-vku-primary">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 text-vku-text-secondary hover:text-vku-primary rounded-md focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
          {navigationLinks.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-lg font-medium transition-colors duration-200 ${
                  isActive ? 'text-vku-primary' : 'text-vku-text-primary hover:text-vku-primary'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
