import React, { useState } from 'react';
import Container from '../common/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    title: "1. India Entry Services",
    content: "We provide comprehensive support for foreign entities looking to establish a presence in India, navigating regulatory hurdles, company incorporation, and initial compliance setup."
  },
  {
    title: "2. Start-up Services",
    content: "From seed funding advisory to structuring equity and setting up robust accounting systems, we offer end-to-end solutions tailored for high-growth startups."
  },
  {
    title: "3. Our Social sector responsibility.",
    content: "We are deeply committed to giving back. We partner with NGOs and social enterprises to provide pro-bono financial structuring and compliance training."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-white border-t border-gray-200">
      <Container className="max-w-[1000px]">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 leading-relaxed text-[15px]">
            At VKU, we know that every client is unique and has specific needs. We take the time to understand their needs and work closely with them to develop the best possible solutions. Our team of experts cover everything from A to Z, providing comprehensive, customised solutions to help each client achieve their goals.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-gray-200 rounded-md overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-700">
                    {faq.title}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                    {faq.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
