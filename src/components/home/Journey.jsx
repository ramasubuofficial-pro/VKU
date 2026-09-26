import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import { timelineData } from '../../data/timeline';
import { Eye } from 'lucide-react';

const timelineColors = [
  { text: 'text-[#63B8C9]', bg: 'bg-[#63B8C9]', border: 'border-[#63B8C9]' },
  { text: 'text-[#98C15E]', bg: 'bg-[#98C15E]', border: 'border-[#98C15E]' },
  { text: 'text-[#F2CD5C]', bg: 'bg-[#F2CD5C]', border: 'border-[#F2CD5C]' },
  { text: 'text-[#E3854F]', bg: 'bg-[#E3854F]', border: 'border-[#E3854F]' },
  { text: 'text-[#D66B7A]', bg: 'bg-[#D66B7A]', border: 'border-[#D66B7A]' }
];

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through timeline items every 3 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  const activeTheme = timelineColors[activeIndex % timelineColors.length];

  return (
    <div className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#59595b]">Our Story</h2>
        </div>

        <div
          className="relative max-w-6xl mx-auto mb-16 md:mb-32 px-4 mt-8 md:mt-16 flex justify-center md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Timeline background track line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] md:w-auto md:-translate-x-0 md:left-8 md:right-8 md:top-[12px] md:bottom-auto md:h-[2px] bg-gray-200 z-0"></div>

          <div className="flex flex-col md:flex-row justify-between items-center relative w-full gap-y-16 md:gap-y-0">
            {timelineData.map((item, index) => {
              const isActive = activeIndex === index;
              const theme = timelineColors[index % timelineColors.length];

              return (
                <button
                  type="button"
                  key={`timeline-${index}`}
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  onFocus={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onBlur={() => setIsPaused(false)}
                  className="flex flex-col items-center cursor-pointer group relative z-10 w-full md:w-auto bg-transparent border-0 py-2 px-3 transition-transform duration-200"
                  style={{ flexBasis: `${100 / timelineData.length}%` }}
                >
                  {/* Indicator Dot */}
                  <div
                    className={`w-[14px] h-[14px] rounded-full border-[3px] bg-white z-10 transition-all duration-300 ${
                      isActive ? `${theme.border} scale-125` : 'border-gray-300 group-hover:border-gray-500 group-hover:scale-110'
                    }`}
                  ></div>

                  {/* Year / Step Label */}
                  <div
                    className={`text-[13px] font-bold mt-4 absolute left-1/2 ml-4 top-1/2 -translate-y-1/2 md:relative md:left-auto md:ml-0 md:top-auto md:translate-y-0 transition-opacity duration-300 ${
                      theme.text
                    } ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'}`}
                  >
                    {item.year}
                  </div>

                  {/* Active Popover Icon & Label */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 md:top-[-35px] md:-translate-y-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none ${
                      isActive ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-50 z-0'
                    }`}
                  >
                    <div className={`w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full flex items-center justify-center text-white shadow-lg ${theme.bg}`}>
                      <Eye className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                    </div>
                    <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 md:relative md:left-auto md:ml-0 md:top-auto md:translate-y-0 md:mt-4 text-sm font-bold whitespace-nowrap ${theme.text}`}>
                      {item.year}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Story Details Card (Pauses auto-cycle on hover so user can read comfortably) */}
        <div
          className="text-center mt-12 max-w-3xl mx-auto min-h-[140px] px-6 py-6 rounded-2xl transition-all duration-300 bg-gray-50/70 border border-gray-100 shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white shadow-xs border border-gray-200/80">
            <span className={activeTheme.text}>{timelineData[activeIndex].year}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 transition-colors duration-200">
            {timelineData[activeIndex].title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {timelineData[activeIndex].description}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Journey;
