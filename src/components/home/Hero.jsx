import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg1 from '../../assets/vkuhomehero1.avif';
import heroImg2 from '../../assets/vkuhomehero2.jpg';
import heroImg3 from '../../assets/vkuhomehero3.avif';
import heroImg4 from '../../assets/vkuhomehero4.jpg';

const slides = [
  {
    id: 1,
    image: heroImg1,
    text: 'From Compliance to Clarity.'
  },
  {
    id: 2,
    image: heroImg2,
    text: 'Numbers tell a story.\nWe help businesses understand it.'
  },
  {
    id: 3,
    image: heroImg3,
    text: 'Beyond compliance.\nCloser to better business decisions.'
  },
  {
    id: 4,
    image: heroImg4,
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
    <div className="relative w-full h-[650px] md:h-[calc(100vh-60px)] overflow-hidden group bg-vku-text-primary   m-0 p-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-in-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-12 md:px-24">
            <h1 className={`text-4xl md:text-6xl lg:text-5xl font-light text-white text-center tracking-tight leading-tight max-w-5xl whitespace-pre-line transform transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              {slide.text}
            </h1>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm cursor-pointer"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm cursor-pointer"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Hero;
