import React, { useState } from 'react';
import Container from '../common/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

const approachItems = [
  {
    id: 1,
    number: "01",
    title: "Understand the business."
  },
  {
    id: 2,
    number: "02",
    title: "Strengthen the numbers."
  },
  {
    id: 3,
    number: "03",
    title: "Improve the processes."
  },
  {
    id: 4,
    number: "04",
    title: "Enable better decisions."
  }
];

const OurApproach = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="py-20 bg-vku-background">
      <Container className="max-w-[800px] mx-auto w-full px-4 md:px-6">
        
        <div className="mb-10 text-left">
          <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-vku-orange uppercase">
            OUR APPROACH
          </h4>
        </div>

        <div className="flex flex-col space-y-3 md:space-y-4">
          {approachItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div 
                key={item.id}
                className={`bg-white border rounded-[6px] overflow-hidden transition-colors duration-300 ${
                  isActive ? 'border-vku-primary' : 'border-[#DCE4E9]'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isActive}
                  aria-controls={`approach-content-${item.id}`}
                  className="w-full flex items-center justify-between px-5 md:px-6 py-5 md:py-6 text-left focus:outline-none focus:ring-2 focus:ring-vku-orange/50 transition-colors"
                >
                  <div className="flex items-center space-x-6 md:space-x-8">
                    <span className="text-[14px] md:text-[16px] font-bold text-vku-primary w-[24px]">
                      {item.number}
                    </span>
                    <span className={`text-[17px] md:text-[20px] font-semibold transition-colors duration-300 ${
                      isActive ? 'text-vku-primary' : 'text-[#172B3A]'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    {isActive ? (
                      <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-vku-orange transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#667785] transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div 
                  id={`approach-content-${item.id}`}
                  className={`transition-all duration-300 ease-out overflow-hidden ${
                    isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {/* Content area is intentionally left minimal as no descriptions exist, fulfilling the animation requirement without inventing text */}
                  {isActive && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 ml-[48px] md:ml-[56px]">
                      <div className="h-[2px] w-8 bg-vku-orange/20 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </div>
  );
};

export default OurApproach;
