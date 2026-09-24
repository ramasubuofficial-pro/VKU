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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden group bg-vku-text-primary m-0 p-0">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Text with Updated Font Styling */}
          <div className="absolute inset-0 flex items-center justify-center px-8 md:px-20">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center tracking-tight leading-tight max-w-4xl transform transition-all duration-1000 whitespace-pre-line ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              {slide.text}
            </h1>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </div>
  );
};

export default Hero;