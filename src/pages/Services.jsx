import React from 'react';
import { whyChooseServices } from '../data/servicesPage';

import ServicesHero from '../components/services/ServicesHero';
import CoreServices from '../components/services/CoreServices';
import IndustriesWeServe from '../components/services/IndustriesWeServe';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Services = () => {
  return (
    <div>
      <div className="border-b border-vku-border">
        <ServicesHero />
      </div>
      
      <CoreServices />
      
      <IndustriesWeServe />
      
      <WhyChooseUs 
        data={whyChooseServices}
        eyebrow="Why choose VKU"
        title="Professional expertise. Practical understanding."
        description="We bring together capabilities across audit, taxation, finance, banking and business advisory to support the varied requirements of our clients."
      />
      
    </div>
  );
};

export default Services;
