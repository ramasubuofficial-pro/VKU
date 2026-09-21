import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/ca_office_discussion_1789637114629.jpg', 
    text: 'From Compliance to Clarity.'
  },
  {
    id: 2,
    image: '/images/financial_audit_1789637139685.jpg',
    text: 'Numbers tell a story.\nWe help businesses understand it.'
  },
  {
    id: 3,
    image: '/images/boardroom_strategy_1789637160808.jpg',
    text: 'Beyond compliance.\nCloser to better business decisions.'
  },
  {
    id: 4,
    image: '/images/corporate_building_1789637183089.jpg',
    text: 'Your business is evolving.\nYour finance function should evolve with it.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[600px] md:h-[calc(100vh-88px)] overflow-hidden group bg-vku-text-primary mt-[88px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center px-12 md:px-24">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center tracking-tight leading-tight max-w-5xl transform transition-all duration-1000 ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {slide.text}
            </h1>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
      
    </div>
  );
};

export default Hero;
