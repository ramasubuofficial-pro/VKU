import React from 'react';
import PageHero from '../common/PageHero';
import { servicesHero } from '../../data/servicesPage';

const ServicesHero = () => {
  return (
    <PageHero
      eyebrow={servicesHero.title}
      title={servicesHero.heading}
      description={servicesHero.description}
    />
  );
};

export default ServicesHero;
