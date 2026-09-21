import React from 'react';

const Section = ({ children, className = '', id, bg = 'bg-vku-background' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
