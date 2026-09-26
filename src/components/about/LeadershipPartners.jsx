import React from 'react';
import Container from '../common/Container';
import { User, ArrowRight } from 'lucide-react';

import mayankImg from '../../assets/images/about/umbarkar.png';
import eeshaImg from '../../assets/images/about/esha.png';
import anshulImg from '../../assets/images/about/anshul.png';
import priyankaImg from '../../assets/images/about/priyanka.png';
import ajinkyaImg from '../../assets/images/about/ajinkya.png';
import ashishImg from '../../assets/images/about/ashish.png';
import sudhirImg from '../../assets/images/about/sudhir.png';

const partners = [
  {
    image: eeshaImg,
    name: "CA. Eesha Umbarkar",
    role: "Partner"
  },
  {
    image: anshulImg,
    name: "CA. Anshul Soni",
    role: "Partner"
  },
  {
    image: priyankaImg,
    name: "CA. Priyanka Sethi",
    role: "Partner"
  },
  {
    image: ajinkyaImg,
    name: "CA. Ajinkya Nandanwar",
    role: "Partner"
  },
  {
    image: ashishImg,
    name: "CA. Ashish Nehra",
    role: "Partner"
  },
  {
    image: sudhirImg,
    name: "CA. Sudhir Thengdi",
    role: "Partner"
  }
];

const LeadershipPartners = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <Container className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-5">
            PARTNERS & PEOPLE
          </h4>
          <h2 className="text-[34px] md:text-[36px] lg:text-[34px] font-bold text-vku-primary leading-[1.15] mb-6">
            Meet the professionals behind VKU.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#667785] leading-[1.7] max-w-[800px]">
            Our firm's expertise is built through the experience, professional commitment and contributions of our partners and team.
            <br className="hidden md:block" /><br className="hidden md:block" />
            We bring together capabilities across audit, taxation, finance, banking and business advisory to support the varied requirements of our clients.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#DCE4E9] mb-16 lg:mb-20"></div>

        {/* Managing Partner Section */}
        <div className="mb-16 lg:mb-20">
          <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-10 lg:mb-12">
            MANAGING PARTNER
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Professional Portrait */}
            <div className="w-full aspect-[4/5] bg-[#F7F9FB] border border-[#DCE4E9] rounded-[12px] flex flex-col items-center justify-center text-[#667785] overflow-hidden">
              <img src={mayankImg} alt="CA. Mayank Umbarkar" className="w-full h-full object-cover" />
            </div>

            {/* Right: Managing Partner Details */}
            <div className="flex flex-col">
              <h3 className="text-[32px] lg:text-[40px] font-light text-[#175888] mb-2 leading-tight">
                CA. Mayank Umbarkar
              </h3>
              <p className="text-[16px] lg:text-[18px] font-semibold text-[#667785] mb-2">
                Managing Partner
              </p>
              <p className="text-[15px] lg:text-[17px] text-[#667785] mb-8">
                B. Com, FCA, DISA (ICAI), SAP (FI)
              </p>
              <p className="text-[16px] lg:text-[18px] text-[#667785] leading-[1.7] max-w-[600px]">
                Mayank is a finance professional with corporate experience at EY and Wipro. He leads VKU's consulting, consulting CFO and startup advisory practice, with experience across management consulting, finance, audit and taxation.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#DCE4E9] mb-16 lg:mb-20"></div>

        {/* Partners Grid Section */}
        <div>
          <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-4">
            OUR PARTNERS
          </h4>
          <h3 className="text-[28px] lg:text-[36px] font-semibold text-[#175888] mb-10 lg:mb-12">
            Partners
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white border border-[#DCE4E9] rounded-[10px] p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#175888]/30 hover:shadow-sm flex flex-col"
              >
                <div className="w-full aspect-[4/5] bg-[#F7F9FB] rounded-[8px] mb-6 overflow-hidden">
                  <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-auto">
                  <h4 className="text-[18px] lg:text-[17px] font-semibold text-[#172B3A] mb-1.5">
                    {partner.name}
                  </h4>
                  <p className="text-[14px] lg:text-[15px] text-[#667785]">
                    {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="flex justify-end">
            <a 
              href="#" 
              className="group inline-flex items-center text-[16px] lg:text-[18px] font-semibold text-[#175888] transition-colors duration-300 hover:text-vku-orange"
            >
              Meet our team
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default LeadershipPartners;
