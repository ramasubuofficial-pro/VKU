import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../ui/Button';

const CTASection = ({ 
  title = "Let's build something meaningful together.",
  description = "Ready to take the next step? Partner with VKU to accelerate your growth and transform your future.",
  buttonText = "Contact VKU Today",
  buttonLink = "/contact"
}) => {
  return (
    <div className="py-24 bg-vku-primary-dark relative overflow-hidden">
      {/* Decorative geometry */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vku-primary rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vku-orange rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <Container className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-vku-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-vku-primary-light max-w-2xl mx-auto mb-10">
          {description}
        </p>
        <Link to={buttonLink}>
          <Button variant="accent" size="lg" className="px-8 py-4 text-lg font-bold">
            {buttonText}
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default CTASection;
