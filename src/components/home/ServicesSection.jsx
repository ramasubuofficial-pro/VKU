import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ServiceCarousel from './ServiceCarousel';

const ServicesSection = () => {
  return (
    <div className="py-24 bg-white border-t border-gray-200">
      <Container className="max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionHeading 
            title="Expertise that supports every stage of your business." 
            subtitle="OUR SERVICES"
            align="center"
          />
          <p className="max-w-3xl mx-auto text-vku-text-secondary mt-6 text-lg leading-relaxed">
            At V. K. Umbarkar & Co., we bring together professional services designed to support compliance, financial visibility, operational controls and business decision-making.
          </p>
        </div>
        
        <ServiceCarousel />
        
      </Container>
    </div>
  );
};

export default ServicesSection;
