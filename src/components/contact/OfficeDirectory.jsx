import React from 'react';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndiaMapIcon from './IndiaMapIcon';

const offices = [
  {
    city: "Nagpur",
    type: "Head Office",
    inCharge: "CA. Mayank Umbarkar"
  },
  {
    city: "Pune",
    type: "Branch Office",
    inCharge: "CA. Eesha Umbarkar"
  },
  {
    city: "Chhindwara",
    type: "Branch Office",
    inCharge: "CA. Anshul Soni"
  },
  {
    city: "Wardha",
    type: "Branch Office",
    inCharge: "CA. Ajinkya Nandanwar"
  }
];

const OfficeDirectory = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <Container className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-[#F47920] uppercase mb-5">
            OUR LOCATIONS
          </h4>
          <h2 className="text-[34px] md:text-[42px] lg:text-[48px] font-bold text-[#175888] leading-[1.15] mb-6">
            Professional support across locations.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#667785] leading-[1.7] max-w-[800px]">
            With offices across four locations, VKU supports clients through its professional practice in:
          </p>
        </div>

        {/* Office Grid - 4 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="group flex flex-col transition-all duration-300"
            >
              {/* Map Image */}
              <div className="mb-4">
                <img 
                  src={`/images/map-${office.city.toLowerCase()}.png`} 
                  alt={`${office.city} Office Map`} 
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              {/* Location Name & Type */}
              <div className="mb-4">
                <h3 className="text-[28px] lg:text-[32px] font-medium text-[#172B3A] mb-1.5 transition-colors duration-300 group-hover:text-[#175888]">
                  {office.city}
                </h3>
                <p className="text-[17px] italic text-[#667785]">
                  {office.type}
                </p>
              </div>

              {/* In-Charge */}
              <div className="mb-6">
                <p className="text-[16px] text-[#172B3A]">
                  In-charge: <span className="font-semibold">{office.inCharge}</span>
                </p>
              </div>

              {/* CTA Link */}
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[15px] lg:text-[16px] font-semibold text-[#175888] transition-colors duration-300 hover:text-[#F47920]"
                  aria-label={`Find VKU office in ${office.city}`}
                >
                  Find our office
                  <ArrowRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row (Optional, kept for consistency if needed, but the prompt says 'Update ONLY the Our Locations section') */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 sm:gap-10 border-t border-[#DCE4E9] pt-8">
          <Link 
            to="/contact" 
            className="group inline-flex items-center text-[16px] lg:text-[18px] font-semibold text-[#175888] transition-colors duration-300 hover:text-[#F47920]"
          >
            Contact us
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default OfficeDirectory;
