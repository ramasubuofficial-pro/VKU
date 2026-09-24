import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { coreServices } from '../../data/servicesPage';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

const CoreServices = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-24 bg-[#F7F9FB]">
      <Container className="max-w-[880px]">
        <div className="text-center mb-16">
          <SectionHeading
            title="Core Services"
            subtitle="What We Do Best"
            align="center"
          />
        </div>

        <div className="space-y-3">
          {coreServices.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                    ? 'shadow-[0_8px_30px_rgba(13,59,92,0.1)] border border-vku-primary/25'
                    : 'shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-vku-border hover:border-vku-primary/30 hover:shadow-[0_4px_16px_rgba(13,59,92,0.06)]'
                  }`}
              >
                {/* Header (always visible) */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-5 px-6 md:px-7 py-5 md:py-6 text-left group"
                >
                  {/* Number Badge */}
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold transition-colors duration-300 ${isOpen
                        ? 'bg-vku-primary text-white'
                        : 'bg-[#EAF3F8] text-vku-primary group-hover:bg-vku-primary/15'
                      }`}
                  >
                    {service.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <span className={`block text-[17px] md:text-[19px] font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-vku-primary' : 'text-vku-text-primary'}`}>
                      {service.title}
                    </span>
                    {!isOpen && (
                      <span className="block text-[13px] text-vku-text-muted mt-1 truncate">
                        {service.subtitle}
                      </span>
                    )}
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-vku-primary' : 'text-vku-text-muted'
                      }`}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-7 pt-0 pl-[76px] md:pl-[84px]">
                      <p className="text-[14px] md:text-[15px] text-vku-text-secondary leading-relaxed mb-5">
                        {service.detailedDescription || service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                        {service.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-vku-green mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-[14px] text-vku-text-secondary">{capability}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="group/link inline-flex items-center gap-1.5 text-[14px] font-semibold text-vku-primary hover:text-vku-orange transition-colors"
                      >
                        Discuss this service
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
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