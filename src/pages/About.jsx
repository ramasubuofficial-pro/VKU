import React from 'react';
import { 
  aboutHero
} from '../data/about';

import AboutHero from '../components/about/AboutHero';
import VisionValues from '../components/about/VisionValues';
import Journey from '../components/home/Journey';
import LeadershipPartners from '../components/about/LeadershipPartners';
import WhyChooseUs from '../components/home/WhyChooseUs';
import OurApproach from '../components/about/OurApproach';

const About = () => {
  return (
    <div className="pt-20"> {/* PT-20 to account for fixed header */}
      <AboutHero data={aboutHero} />
      
      <Journey />

      <VisionValues />
      
      <LeadershipPartners />
      <WhyChooseUs />
      
      <OurApproach />
    </div>
  );
};

export default About;
