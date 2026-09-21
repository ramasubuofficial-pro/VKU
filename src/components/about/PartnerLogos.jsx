import React from 'react';
import Container from '../common/Container';

const PartnerLogos = ({ partners }) => {
  return (
    <div className="py-24 bg-white border-t border-gray-200">
      <Container className="max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-700">
            Our Partners
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="w-full max-w-[180px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PartnerLogos;
