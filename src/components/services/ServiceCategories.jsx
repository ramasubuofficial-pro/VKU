import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { serviceCategories } from '../../data/servicesPage';

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const activeData = serviceCategories.find(c => c.id === activeCategory);

  return (
    <div className="py-24 bg-white border-b border-vku-border">
      <Container className="max-w-[1200px]">
        <div className="text-center mb-16">
          <SectionHeading 
            title="Our Expertise" 
            subtitle="Service Categories" 
            align="center"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Category Navigation */}
          <div className="lg:w-5/12 flex flex-col space-y-2">
            {serviceCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-6 py-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive 
                      ? 'border-vku-primary bg-vku-primary text-white shadow-md' 
                      : 'border-vku-border bg-white text-vku-text-primary hover:border-vku-primary hover:text-vku-primary hover:bg-vku-primary-light/10'
                  }`}
                >
                  <span className="text-lg font-bold">
                    {category.id} — {category.name}
                  </span>
                  <span className={`text-xl transition-transform duration-300 ${isActive ? 'translate-x-2 text-white' : 'text-vku-text-muted group-hover:text-vku-primary group-hover:translate-x-1'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Category Content */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div 
              key={activeData.id} 
              className="bg-vku-surface p-10 md:p-12 rounded-2xl border border-vku-border transition-all duration-500 ease-in-out"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-vku-border flex items-center justify-center mb-8">
                <activeData.icon className="w-8 h-8 text-vku-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {activeData.name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {activeData.description}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default ServiceCategories;
