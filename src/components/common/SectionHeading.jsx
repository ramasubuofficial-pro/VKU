import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`text-${align} mb-8`}>
      {/* Orange color changed to Corporate Blue */}
      {subtitle && (
        <span className="text-sm font-bold tracking-widest text-[#0D3B5C] uppercase block mb-2">
          {subtitle}
        </span>
      )}

      {/* Title */}
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3B5C] tracking-tight">
          {title}
        </h2>
      )}

      {/* Dark Navy Underline Bar */}
      <div className="w-16 h-1 bg-[#0D3B5C] mx-auto rounded-full mt-3"></div>
    </div>
  );
};

export default SectionHeading;