import React from 'react';
import Container from '../common/Container';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const DirectContact = () => {
  return (
    <section className="py-16 bg-[#F7FAFC] border-y border-[#DCE4E9]">
      <Container className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-[13px] font-bold tracking-[0.16em] text-[#053151] uppercase mb-4">
              CONNECT WITH VKU
            </h4>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#175888] leading-[1.2] mb-5">
              Tell us about your requirements.
            </h2>
            <p className="text-[16px] text-[#667785] leading-[1.7] mb-8">
              We will help you understand the relevant professional service areas and next steps.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#175888] hover:text-[#F47920] transition-colors duration-300"
            >
              Request a consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Office locations */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            {[
              { city: "Nagpur", type: "Head Office", inCharge: "CA. Mayank Umbarkar" },
              { city: "Pune", type: "Branch Office", inCharge: "CA. Eesha Umbarkar" },
              { city: "Chhindwara", type: "Branch Office", inCharge: "CA. Anshul Soni" },
              { city: "Wardha", type: "Branch Office", inCharge: "CA. Ajinkya Nandanwar" }
            ].map((office) => (
              <div key={office.city} className="border-t border-[#DCE4E9] pt-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#053151]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#053151]">{office.type}</span>
                </div>
                <p className="text-[16px] font-bold text-[#172B3A]">{office.city}</p>
                <p className="text-[13px] text-[#667785] mt-1">{office.inCharge}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DirectContact;
