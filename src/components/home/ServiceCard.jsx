import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, LineChart, Cpu, Lightbulb, Users, Globe, Building, Calculator, FileText, PieChart, Scale, ShieldCheck, TrendingUp } from 'lucide-react';

const iconMap = {
  Briefcase, LineChart, Cpu, Lightbulb, Users, Globe, Building, Calculator, FileText, PieChart, Scale, ShieldCheck, TrendingUp
};

const ServiceCard = ({ service, colorClass }) => {
  const Icon = iconMap[service.icon] || Briefcase;

  return (
    <div className="bg-[#f7f8f9] h-full flex flex-col items-center p-8 text-center min-h-[380px] border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-vku-primary/30 group">
      
      <div className={`mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${colorClass}`}>
        <Icon className="w-12 h-12 stroke-[1.5]" />
      </div>
      
      <h3 className="text-[17px] font-bold text-gray-800 mb-4 leading-snug">
        {service.title}
      </h3>
      
      <p className="text-[13px] text-gray-500 mb-8 flex-1 leading-relaxed">
        {service.description}
      </p>
      
      <Link 
        to={`/services/${service.id}`}
        className="mt-auto text-[13px] font-semibold text-[#F47920] hover:text-[#175888] transition-colors"
      >
        Learn more
      </Link>
    </div>
  );
};

export default ServiceCard;
