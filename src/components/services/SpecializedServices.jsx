import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { specializedServices } from '../../data/servicesPage';

const SpecializedServices = () => {
  return (
    <div className="py-24 bg-vku-surface border-y border-vku-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vku-primary opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      
      <Container className="relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Heading and Intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h4 className="text-sm font-bold tracking-[0.2em] text-vku-orange uppercase mb-4">
              Tailor-Made Solutions
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Solutions built around your precise needs.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We understand that standard frameworks don't fit every challenge. Our specialized advisory teams craft bespoke strategies tailored to your unique operational context, industry vertical, and growth ambitions.
            </p>
          </div>

          {/* Right: Solutions Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white p-8 md:p-10 rounded-2xl border border-vku-border shadow-sm hover:shadow-lg hover:border-vku-primary/50 transition-all duration-300 group cursor-pointer h-full flex flex-col"
                  >
                    <div className="w-14 h-14 bg-vku-surface rounded-xl flex items-center justify-center mb-6 group-hover:bg-vku-primary transition-colors duration-300">
                      <Icon className="w-7 h-7 text-gray-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-vku-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-vku-orange font-bold text-sm uppercase tracking-wider group-hover:text-vku-primary transition-colors duration-300">
                      <span>Explore</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default SpecializedServices;
