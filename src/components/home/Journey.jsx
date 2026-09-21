import React, { useState } from 'react';
import Container from '../common/Container';
import { timelineData } from '../../data/timeline';
import { Eye } from 'lucide-react';

// Colors replicating the screenshot pattern
const timelineColors = [
  { text: 'text-[#63B8C9]', bg: 'bg-[#63B8C9]', border: 'border-[#63B8C9]' }, // Teal
  { text: 'text-[#98C15E]', bg: 'bg-[#98C15E]', border: 'border-[#98C15E]' }, // Green
  { text: 'text-[#F2CD5C]', bg: 'bg-[#F2CD5C]', border: 'border-[#F2CD5C]' }, // Yellow
  { text: 'text-[#E3854F]', bg: 'bg-[#E3854F]', border: 'border-[#E3854F]' }, // Orange
  { text: 'text-[#D66B7A]', bg: 'bg-[#D66B7A]', border: 'border-[#D66B7A]' }  // Red/Pink
];

const Journey = () => {
  // Default to the last item
  const [activeIndex, setActiveIndex] = useState(timelineData.length - 1);

  return (
    <div className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-[#59595b]">Our Story</h2>
        </div>
        
        {/* Timeline Line & Items */}
        <div className="relative max-w-6xl mx-auto mb-20 md:mb-40 px-4 mt-12 md:mt-20 flex justify-center md:block">
          {/* Main Line (Vertical on mobile, Horizontal on desktop) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] md:w-auto md:-translate-x-0 md:left-8 md:right-8 md:top-[4px] md:bottom-auto md:h-[2px] bg-gray-200 z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative w-full gap-y-16 md:gap-y-0">
            {timelineData.map((item, index) => {
              const isActive = activeIndex === index;
              const theme = timelineColors[index % timelineColors.length];

              return (
                <div 
                  key={item.year}
                  className="flex flex-col items-center cursor-pointer group relative z-10 w-full md:w-auto"
                  onMouseEnter={() => setActiveIndex(index)}
                  style={{ flexBasis: `${100 / timelineData.length}%` }}
                >
                  {/* Small hollow dot */}
                  <div className={`w-[10px] h-[10px] rounded-full border-[2px] bg-white z-10 transition-colors duration-300 ${isActive ? theme.border : 'border-gray-300 group-hover:border-gray-500'}`}></div>
                  
                  {/* Year text (Visible when not active) */}
                  <div className={`text-[13px] font-bold mt-4 md:mt-4 absolute left-1/2 ml-4 top-1/2 -translate-y-1/2 md:relative md:left-auto md:ml-0 md:top-auto md:translate-y-0 transition-opacity duration-300 ${theme.text} ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-80'}`}>
                    {item.year}
                  </div>

                  {/* Active Hover Popup (Expands exactly from the dot's center) */}
                  <div className={`absolute top-1/2 -translate-y-1/2 md:top-[-35px] md:-translate-y-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none ${isActive ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-50 z-0'}`}>
                    
                    {/* Large Colored Circle */}
                    <div className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center text-white shadow-md ${theme.bg}`}>
                      <Eye className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                    </div>
                    
                    {/* Active Description Text */}
                    <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 md:relative md:left-auto md:ml-0 md:top-auto md:translate-y-0 md:mt-6 text-sm font-semibold whitespace-nowrap ${theme.text}`}>
                      {item.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-20 max-w-2xl mx-auto min-h-[120px] transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{timelineData[activeIndex].title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{timelineData[activeIndex].description}</p>
        </div>
      </Container>
    </div>
  );
};

export default Journey;
