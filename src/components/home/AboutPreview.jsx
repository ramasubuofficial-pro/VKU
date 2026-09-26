import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import aboutImg from '../../assets/images/services/financial-advisory.jpg';

const AboutPreview = () => {
  return (
    <div className="py-24 bg-vku-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-lg border border-vku-border">
              <img
                src={aboutImg}
                alt="VKU Chartered Accountants — Professional Practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-vku-green/20 rounded-full blur-2xl z-0"></div>
          </div>

          <div >
            <SectionHeading
              title="A journey built on trust. A future shaped by possibility."
              subtitle="ABOUT VKU"
            />
            <div className="space-y-5 text-vku-text-secondary text-[17px] leading-relaxed">
              <p>
                Established in 1986, V. K. Umbarkar & Co. has developed a professional practice serving businesses, institutions and banking organisations through audit, taxation, finance and advisory services.
              </p>
              <p>
                Our journey is built on the belief that professional services should do more than meet regulatory requirements. They should help clients understand their financial position, strengthen their processes and make informed decisions.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/about">
                <Button variant="secondary" size="lg">Meet VKU</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPreview;