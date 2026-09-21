import React from 'react';
import Container from '../common/Container';

const CompanyGenesis = ({ data }) => {
  const [heading1, heading2] = data.heading.split('\n');

  return (
    <div className="py-24 lg:py-32 bg-white overflow-hidden">
      <Container className="max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] xl:gap-[100px] items-start">
          
          {/* Left Column: Heading and Image */}
          <div className="flex flex-col animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-6 lg:mb-8">
              {data.eyebrow}
            </h4>
            
            <h2 className="text-[38px] md:text-[46px] lg:text-[52px] xl:text-[58px] font-bold text-vku-primary leading-[1.15] mb-12">
              <span className="block">{heading1}</span>
              <span className="block">{heading2}</span>
            </h2>
            
            <div className="w-full rounded-[14px] overflow-hidden shadow-sm aspect-[4/3] relative">
              <img 
                src={data.image} 
                alt="VKU corporate professionals in discussion" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="flex flex-col lg:pt-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="space-y-6 md:space-y-8 text-[17px] md:text-[18px] lg:text-[19px] text-[#667785] leading-[1.7] lg:leading-[1.8] max-w-[700px]">
              {data.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default CompanyGenesis;
