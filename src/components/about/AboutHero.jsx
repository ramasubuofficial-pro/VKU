import React from 'react';
import Container from '../common/Container';

const AboutHero = ({ data }) => {
  return (
    <div className="pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24 bg-white relative overflow-hidden flex flex-col items-center text-center">

      {/* Extremely subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vku-primary-light opacity-30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vku-primary-light opacity-20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <Container className="relative z-10 flex flex-col items-center w-full">
        {/* Eyebrow Label */}
        <h4 className="text-[16px] md:text-[18px] font-semibold tracking-[0.18em] text-vku-orange uppercase mb-4 md:mb-6 animate-fade-in-up">
          {data.title}
        </h4>

        {/* Decorative Divider */}
        <div className="w-[60px] md:w-[80px] h-[2px] md:h-[3px] bg-vku-orange mb-10 md:mb-14 lg:mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}></div>

        {/* Main Heading */}
        <h1 className="text-[34px] sm:text-[38px] md:text-[48px] lg:text-[64px] font-bold text-vku-primary leading-[1.15] md:leading-[1.1] lg:leading-[1.08] tracking-tight max-w-[1300px] mb-8 md:mb-10 lg:mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          "{data.quote}"
        </h1>

        {/* Supporting Description */}
        <p className="text-[17px] md:text-[18px] lg:text-[22px] text-[#667785] font-normal leading-[1.6] md:leading-[1.65] lg:leading-[1.7] max-w-[1100px] animate-fade-in-up mb-12" style={{ animationDelay: '300ms' }}>
          {data.description}
        </p>

        {/* Story Text (Moved from Genesis) */}
        {data.storyContent && (
          <div className="text-left font-light space-y-6 md:space-y-8 text-[26px] md:text-[32px] lg:text-[40px] text-[#667785] leading-[1.7] md:leading-[1.8] w-full animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {data.storyContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AboutHero;

