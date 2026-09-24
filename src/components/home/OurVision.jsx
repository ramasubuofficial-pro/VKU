import React from 'react';
import Container from '../common/Container';
import { Eye } from 'lucide-react';

const OurVision = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <Container className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-16 animate-fade-in-up">
          <div className="flex-shrink-0 bg-[#F7F9FB] rounded-full p-6 md:p-8 flex items-center justify-center">
            <Eye className="w-16 h-16 lg:w-20 lg:h-15 text-[#175888] stroke-[1.8]" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[30px] lg:text-[22px] font-bold text-[#175888] mb-4">
              Our Vision
            </h3>
            <p className="text-[09px] md:text-[26px] lg:text-[25px] font-medium text-[#172B3A] leading-[1.45] max-w-[800px]">
              To build a forward-looking professional services practice that combines trust, expertise and financial clarity to support businesses and institutions through their evolving requirements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurVision;
