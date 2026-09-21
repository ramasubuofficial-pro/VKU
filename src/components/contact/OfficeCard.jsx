import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const OfficeCard = ({ office, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${
        isSelected
          ? 'border-vku-primary bg-vku-primary-light/10 shadow-md ring-1 ring-vku-primary'
          : 'border-vku-border bg-white hover:border-vku-primary/50 hover:shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
          isSelected ? 'bg-vku-primary text-white' : 'bg-vku-surface text-vku-primary'
        }`}>
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{office.name}</h3>
          <p className="text-vku-text-muted font-medium">{office.city}, {office.country}</p>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        <div className="text-gray-600">
          {office.address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        
        <div className="pt-4 space-y-2 border-t border-vku-border/50">
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-3 text-vku-text-muted" />
            <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} onClick={(e) => e.stopPropagation()} className="hover:text-vku-primary transition-colors">
              {office.phone}
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-3 text-vku-text-muted" />
            <a href={`mailto:${office.email}`} onClick={(e) => e.stopPropagation()} className="hover:text-vku-primary transition-colors">
              {office.email}
            </a>
          </div>
        </div>
      </div>

      <div className={`mt-auto font-bold text-sm uppercase tracking-wider flex items-center transition-colors duration-300 ${
        isSelected ? 'text-vku-primary' : 'text-vku-text-muted group-hover:text-vku-primary'
      }`}>
        <span>View on Map</span>
        <span className={`ml-2 transform transition-transform duration-300 ${isSelected ? 'translate-x-2' : ''}`}>→</span>
      </div>
    </button>
  );
};

export default OfficeCard;
