import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import { coreServices } from '../../data/servicesPage';
import { CheckCircle2 } from 'lucide-react';

const CoreServices = () => {
  return (
    <div className="py-24 bg-white border-y border-vku-border">
      <Container className="max-w-[1200px]">
        <div className="text-center mb-20">
          <SectionHeading 
            title="Core Services" 
            subtitle="What We Do Best"
            align="center"
          />
        </div>

        <div className="space-y-24 md:space-y-32">
          {coreServices.map((service, index) => {
            // Alternate layout: Even index -> Image Left. Odd index -> Image Right.
            const isImageLeft = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                  isImageLeft ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-vku-border relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Decorative Overlay Box */}
                    <div className={`absolute top-6 ${isImageLeft ? 'left-6' : 'right-6'} bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg`}>
                      <span className="text-3xl font-black text-vku-primary tracking-tighter opacity-80">
                        {service.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <h4 className="text-sm font-bold tracking-[0.2em] text-vku-orange uppercase mb-4">
                    {service.subtitle}
                  </h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-vku-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{capability}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant="primary">Discuss this service</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default CoreServices;
