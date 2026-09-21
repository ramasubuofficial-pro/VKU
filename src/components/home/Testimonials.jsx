import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "VKU's strategic foresight and flawless execution completely transformed our compliance workflow. They are true partners in our growth journey.",
    name: "Rajesh Kumar",
    title: "CFO, TechNova Solutions",
    company: "TechNova"
  },
  {
    quote: "The depth of expertise the VKU team brings is unmatched. Their valuation models and due diligence were critical to our successful acquisition.",
    name: "Sarah Jenkins",
    title: "Director of Strategy",
    company: "Global Ventures Inc."
  },
  {
    quote: "We've worked with many firms, but VKU stands out for their uncompromising integrity and hands-on approach. Highly recommended.",
    name: "Amit Desai",
    title: "Founder & CEO",
    company: "Desai Logistics"
  }
];

const Testimonials = () => {
  return (
    <div className="py-24 bg-vku-surface border-t border-gray-200">
      <Container className="max-w-[1400px]">
        <div className="text-center mb-16">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Testimonials"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-vku-border relative group"
            >
              <Quote className="w-10 h-10 text-gray-200 absolute top-8 right-8 rotate-180" />
              <div className="mb-6 relative z-10">
                {/* 5 Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-vku-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 bg-vku-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
