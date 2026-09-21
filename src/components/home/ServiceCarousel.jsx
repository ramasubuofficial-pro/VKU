import React, { useState, useEffect, useRef } from 'react';
import { servicesData } from '../../data/services';
import ServiceCard from './ServiceCard';
import CarouselArrow from './CarouselArrow';

const cardColors = ['text-[#F2CD5C]', 'text-[#E3854F]', 'text-[#D66B7A]', 'text-[#98C15E]', 'text-[#63B8C9]'];

const ServiceCarousel = () => {
  const N = servicesData.length;
  // Duplicate array 3 times for infinite scrolling loop
  const extendedData = [...servicesData, ...servicesData, ...servicesData];
  
  const [currentIndex, setCurrentIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ResizeObserver for responsive visible card count
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        if (width >= 1024) setVisibleCards(5);
        else if (width >= 768) setVisibleCards(3);
        else setVisibleCards(1);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Handle infinite loop snapback
  const handleTransitionEnd = () => {
    // If we moved into the third duplicated block (index >= 2N)
    if (currentIndex >= 2 * N) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - N);
    } 
    // If we moved into the first duplicated block (index <= N - 1)
    // Actually, checking <= 0 is safer to prevent premature snapping if user clicks fast
    else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + N);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  // Touch Swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) nextSlide();
    if (swipeDistance < -50) prevSlide();
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const transitionStyle = (isTransitioning && !prefersReducedMotion) 
    ? 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)' 
    : 'none';

  return (
    <div 
      className="relative group px-4 md:px-8"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Services Carousel"
    >
      <div 
        className="overflow-hidden w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex will-change-transform"
          style={{ 
            transition: transitionStyle,
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedData.map((service, idx) => {
            // Keep colors consistent based on original index
            const originalIndex = idx % N;
            const colorClass = cardColors[originalIndex % cardColors.length];
            
            return (
              <div 
                key={`${service.id}-${idx}`}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleCards}%` }}
                role="group"
                aria-roledescription="slide"
              >
                <ServiceCard service={service} colorClass={colorClass} />
              </div>
            );
          })}
        </div>
      </div>

      <CarouselArrow 
        direction="left" 
        onClick={prevSlide} 
        ariaLabel="Previous Services" 
      />
      
      <CarouselArrow 
        direction="right" 
        onClick={nextSlide} 
        ariaLabel="Next Services" 
      />
    </div>
  );
};

export default ServiceCarousel;
