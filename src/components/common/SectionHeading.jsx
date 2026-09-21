import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'left', className = '' }) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left';
  
  return (
    <div className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      {subtitle && (
        <span className="inline-block py-1 px-3 rounded-full bg-vku-primary-light text-vku-primary text-sm font-semibold tracking-wider uppercase mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-vku-text-primary mb-4">
        {title}
      </h2>
      <div className={`w-16 h-1 bg-vku-orange mt-2 mb-6 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
