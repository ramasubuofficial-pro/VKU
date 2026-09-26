import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import Journey from '../components/home/Journey';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutPreview from '../components/home/AboutPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <Journey />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
