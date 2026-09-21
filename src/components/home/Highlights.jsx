import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const Highlights = () => {
  const stats = [
    { label: 'Global Clients', value: '250+' },
    { label: 'Years of Excellence', value: '15' },
    { label: 'Projects Delivered', value: '1,200+' },
    { label: 'Industry Awards', value: '45' }
  ];

  return (
    <div className="py-20 bg-vku-background">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-vku-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-vku-text-secondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Highlights;
