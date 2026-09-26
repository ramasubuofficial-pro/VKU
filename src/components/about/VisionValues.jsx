import React from 'react';

const VisionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-14 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">

          {/* Big Vision Image Section */}
          <div className="w-full lg:w-1/2 h-72 md:h-80 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              alt="Our Vision Corporate Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content & Typography */}
          <div className="flex-1 text-left">
            <span className="text-sm font-bold tracking-widest text-[#053151] uppercase block mb-3">
              Our Vision
            </span>
            <h3 className="text-2xl md:text-3xl font-extralight text-[#0A192F] leading-snug">
              To build a forward-looking professional services practice that combines trust, expertise and financial clarity to support businesses and institutions through their evolving requirements.
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;