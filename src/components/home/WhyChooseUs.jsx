import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Briefcase, Building, Users, Target, Shield, CheckCircle2 } from 'lucide-react';

const defaultReasons = [
  {
    number: "01",
    title: "Established Professional Practice",
    description: "A firm established in 1986, with a long-standing presence in the Chartered Accountancy profession.",
    icon: Building,
    color: "text-vku-primary",
    bg: "bg-blue-50"
  },
  {
    number: "02",
    title: "Multi-disciplinary Expertise",
    description: "Capabilities across Assurance, Tax, Advisory and Controller-as-a-Service.",
    icon: Briefcase,
    color: "text-vku-orange",
    bg: "bg-orange-50"
  },
  {
    number: "03",
    title: "Industry Understanding",
    description: "Experience serving businesses and organisations across sectors including banking, construction, engineering, retail, pharmaceuticals, IT & ITES and professional services.",
    icon: Target,
    color: "text-vku-green",
    bg: "bg-green-50"
  },
  {
    number: "04",
    title: "Finance & Business Perspective",
    description: "A focus on understanding the financial and operational context behind business requirements.",
    icon: Shield,
    color: "text-[#D66B7A]",
    bg: "bg-rose-50"
  },
  {
    number: "05",
    title: "Partner-led Professional Approach",
    description: "A practice supported by seven partners and a team of professionals.",
    icon: Users,
    color: "text-[#F2CD5C]",
    bg: "bg-yellow-50"
  }
];

const WhyChooseUs = ({
  data = defaultReasons,
  eyebrow = "Why choose VKU",
  title = "Professional expertise. Practical understanding.",
  description = ""
}) => {
  return (
    <div className="py-24 bg-vku-surface border-t border-gray-200">
      <Container className="max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionHeading
            title={title}
            subtitle={eyebrow}
            align="center"
            accent="blue"
          />
          {description && (
            <p className="max-w-2xl mx-auto text-vku-text-secondary mt-4">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-vku-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  {Icon && (
                    <div className={`w-14 h-14 ${reason.bg} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-7 h-7 ${reason.color} stroke-[2]`} />
                    </div>
                  )}
                  {reason.number && (
                    <span className="text-3xl font-black text-gray-200">
                      {reason.number}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-500 leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;