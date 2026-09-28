import React from 'react';
import Container from './Container';

const PageHero = ({ eyebrow, title, description, isQuote = false }) => {
  return (
    <div className="pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24 bg-white relative overflow-hidden flex flex-col items-center text-center">
      
      {/* Extremely subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vku-primary-light opacity-30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vku-primary-light opacity-20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <Container className="relative z-10 flex flex-col items-center w-full">
        {/* Eyebrow Label */}
        {eyebrow && (
          <h4 className="text-[14px] md:text-[15px] font-semibold tracking-[0.18em] text-vku-orange uppercase animate-fade-in-up">
            {eyebrow}
          </h4>
        )}
        
        {/* Decorative Divider */}
        <div className="w-[85px] h-[3px] bg-vku-orange mt-5 mb-8 md:mb-10 lg:mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}></div>
        
        {/* Main Heading */}
        <h1 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[64px] font-light text-vku-primary leading-[1.1] md:leading-[1.1] lg:leading-[1.08] tracking-tight max-w-[1050px] mb-8 md:mb-10 lg:mb-10 animate-fade-in-up whitespace-pre-line" style={{ animationDelay: '200ms' }}>
          {isQuote ? `"${title}"` : title}
        </h1>
        
        {/* Supporting Description */}
        <p className="text-[17px] md:text-[18px] lg:text-[20px] text-[#667785] font-normal leading-[1.65] md:leading-[1.7] lg:leading-[1.75] max-w-[1050px] animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {description}
        </p>
      </Container>
    </div>
  );
};

export default PageHero;
