import React from 'react';
import Container from '../common/Container';

const FeatureSection = () => {
  return (
    <div className="py-24 bg-vku-background overflow-hidden">
      <Container>
        {/* Feature 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-vku-text-primary mb-6">
              Data-Driven Methodologies
            </h3>
            <p className="text-lg text-vku-text-secondary mb-6">
              We leverage advanced analytics and proven proprietary frameworks to uncover hidden opportunities and mitigate complex risks.
            </p>
            <ul className="space-y-4">
              {['Predictive Modeling', 'Risk Assessment Frameworks', 'Market Analytics'].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vku-orange mr-3"></div>
                  <span className="text-vku-text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-vku-border shadow-md">
              <img src="https://placehold.co/800x600/175888/FFFFFF?text=Data+Analytics" alt="Analytics" className="w-full h-full object-cover" />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 border-l-4 border-b-4 border-vku-primary rounded-bl-xl -z-10"></div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-vku-border shadow-md">
              <img src="https://placehold.co/800x600/0D3B5C/FFFFFF?text=Global+Reach" alt="Global Reach" className="w-full h-full object-cover" />
            </div>
             {/* Decorative */}
             <div className="absolute -top-4 -right-4 w-3/4 h-3/4 border-t-4 border-r-4 border-vku-green rounded-tr-xl -z-10"></div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-vku-text-primary mb-6">
              Global Perspective, Local Expertise
            </h3>
            <p className="text-lg text-vku-text-secondary mb-6">
              With an extensive network of industry experts across multiple continents, we provide localized strategies powered by a global perspective.
            </p>
            <ul className="space-y-4">
              {['Cross-Border Compliance', 'Cultural Integration', 'Localized Go-To-Market'].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vku-green mr-3"></div>
                  <span className="text-vku-text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureSection;
