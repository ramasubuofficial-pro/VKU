import React from 'react';
import { Eye } from 'lucide-react';

const VisionSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-300xl mx-auto px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 p-6 rounded-xl bg-slate-50/80 border border-slate-200/60">

          {/* Smaller, Compact Icon Circle */}
          <div className="w-20 h-14 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
            <Eye className="w-7 h-7 text-[#0A192F]" strokeWidth={2} />
          </div>

          {/* Compact Text Content */}
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#0A192F] tracking-wide mb-1">
              Our Vision
            </h3>
            <p className="text-base md:text-lg font-normal text-slate-700 leading-relaxed">
              To build a forward-looking professional services practice that combines trust, expertise and financial clarity to support businesses and institutions through their evolving requirements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;