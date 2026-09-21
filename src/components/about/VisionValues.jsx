import React from 'react';
import Container from '../common/Container';
import { Eye, ShieldCheck, BookOpen, Users, BriefcaseBusiness } from 'lucide-react';

const valuesData = [
  {
    number: "01",
    title: "Professional Integrity",
    description: "Maintain a commitment to professional standards, ethical conduct and responsible practice.",
    icon: ShieldCheck,
    iconColor: "text-[#175888]"
  },
  {
    number: "02",
    title: "Continuous Learning",
    description: "Build knowledge and capabilities to respond to evolving business and regulatory requirements.",
    icon: BookOpen,
    iconColor: "text-[#52B947]"
  },
  {
    number: "03",
    title: "Collaborative Expertise",
    description: "Encourage professional teamwork and knowledge-sharing across service areas.",
    icon: Users,
    iconColor: "text-[#175888]"
  },
  {
    number: "04",
    title: "Business Understanding",
    description: "Connect professional services with the financial and operational realities of the client.",
    icon: BriefcaseBusiness,
    iconColor: "text-[#F47920]"
  }
];

const VisionValues = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-5">
            OUR VISION & VALUES
          </h4>
          <h2 className="text-[34px] md:text-[42px] lg:text-[48px] font-bold text-vku-primary leading-[1.15] mb-6">
            The next chapter of our professional journey.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#667785] leading-[1.7] max-w-[800px]">
            We believe that a professional services firm must continue to develop with the changing needs of its clients and the business environment.<br className="hidden md:block" /><br className="hidden md:block" />
            Our vision is to build on our professional foundation while strengthening our capabilities in finance, advisory, technology and business support.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#DCE4E9] mb-14 lg:mb-16"></div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-16 mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex-shrink-0 bg-[#F7F9FB] rounded-full p-6 md:p-8 flex items-center justify-center">
            <Eye className="w-16 h-16 lg:w-20 lg:h-20 text-[#175888] stroke-[1.8]" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] lg:text-[22px] font-bold text-[#175888] mb-4">
              Our Vision
            </h3>
            <p className="text-[24px] md:text-[26px] lg:text-[30px] font-medium text-[#172B3A] leading-[1.45] max-w-[800px]">
              To build a forward-looking professional services practice that combines trust, expertise and financial clarity to support businesses and institutions through their evolving requirements.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#DCE4E9] mb-14 lg:mb-16"></div>

        {/* Values Section */}
        <div className="mb-10 lg:mb-12">
          <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-4">
            OUR VALUES
          </h4>
          <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#175888] leading-[1.2]">
            Our guiding principles
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {valuesData.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-[#DCE4E9] rounded-[12px] p-6 lg:p-8 flex flex-col transition-all duration-300 hover:shadow-sm hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[14px] font-bold text-[#175888] tracking-[0.08em]">
                    {value.number}
                  </span>
                  <Icon className={`w-6 h-6 ${value.iconColor} stroke-[2]`} aria-hidden="true" />
                </div>
                <h4 className="text-[18px] lg:text-[21px] font-semibold text-[#172B3A] mb-3">
                  {value.title}
                </h4>
                <p className="text-[15px] lg:text-[17px] text-[#667785] leading-[1.7]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default VisionValues;
