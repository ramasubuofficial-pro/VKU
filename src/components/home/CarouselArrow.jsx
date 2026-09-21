import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselArrow = ({ direction, onClick, ariaLabel }) => {
  const isLeft = direction === 'left';
  const Icon = isLeft ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || `Navigate ${direction}`}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10
        w-12 h-20 bg-white shadow-lg border border-gray-100
        flex items-center justify-center
        text-vku-primary
        transition-all duration-300
        hover:bg-[#EAF3F8] focus:outline-none focus:ring-2 focus:ring-vku-primary
        ${isLeft ? 'left-[-16px] md:left-0' : 'right-[-16px] md:right-0'}
      `}
    >
      <Icon className="w-6 h-6 stroke-[2]" />
    </button>
  );
};

export default CarouselArrow;
