import React from 'react';
import Hero from '../components/home/Hero';
import Journey from '../components/home/Journey';
import ServicesSection from '../components/home/ServicesSection';
import OurVision from '../components/home/OurVision';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutPreview from '../components/home/AboutPreview';
import BlogPreview from '../components/home/BlogPreview';


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <OurVision />
      <WhyChooseUs />
      <Journey />
      <BlogPreview />
    </div>
  );
};

export default Home;
