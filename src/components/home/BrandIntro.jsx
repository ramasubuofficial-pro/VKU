import React from 'react';
import Container from '../common/Container';

const BrandIntro = () => {
  return (
    <div className="py-24 bg-vku-surface border-y border-vku-border">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-vku-text-primary leading-tight mb-8">
            Where expertise meets innovation.
          </h2>
          <p className="text-xl md:text-2xl text-vku-text-secondary font-light leading-relaxed">
            VKU partners with forward-thinking organizations to navigate complexity, accelerate growth, and drive sustainable value in a rapidly evolving corporate landscape.
          </p>
          <div className="w-24 h-1 bg-vku-primary mx-auto mt-12"></div>
        </div>
      </Container>
    </div>
  );
};

export default BrandIntro;
