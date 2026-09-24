import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { industriesData } from '../../data/industries';
import Container from '../common/Container';

const IndustriesWeServe = () => {
  return (
    <section className="py-[100px] lg:py-[120px] bg-[#F7F9FB]">
      <Container className="max-w-[1440px] w-[90%] mx-auto px-4 md:px-0">

        {/* Header Section */}
        <div className="mb-14 lg:mb-16 text-left">
          <h4 className="text-[14px] lg:text-[15px] font-bold tracking-[0.18em] text-[text-[#053151]] uppercase mb-4 lg:mb-5">
            INDUSTRIES WE SERVE
          </h4>
          <h2 className="text-[34px] md:text-[42px] lg:text-[52px] font-bold text-[text-[#053151]] leading-[1.15] lg:leading-[1.1] max-w-[900px] mb-6">
            Every industry has its own financial realities.
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#667785] font-normal leading-[1.65] lg:leading-[1.7] max-w-[900px]">
            Businesses operate in different environments, with distinct operational models, regulatory requirements and financial considerations. Our professional experience spans a range of sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-12 lg:mb-14">
          {industriesData.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#DCE4E9] rounded-[12px] p-7 md:p-8 min-h-[190px] flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#175888]/30 hover:-translate-y-1 group"
              >
                <div className="mb-5 lg:mb-6 text-[text-[#F47920]] transition-colors duration-300">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-[19px] lg:text-[21px] font-bold text-[#172B3A] mb-3 leading-tight">
                  {industry.title}
                </h3>
                <p className="text-[15px] lg:text-[16px] text-[#667785] leading-[1.6] flex-grow">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex items-center">
          <Link
            to="/services"
            className="group inline-flex items-center text-[16px] lg:text-[18px] font-bold text-[#053151] transition-colors duration-300 hover:text-[#175888]"
          >
            Explore our industry experience
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default IndustriesWeServe;
