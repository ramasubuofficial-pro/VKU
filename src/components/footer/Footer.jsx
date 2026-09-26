import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import Container from '../common/Container';
import Logo from '../common/Logo';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vku-primary-dark text-vku-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-5">
            <div className="text-sm font-bold tracking-[0.12em] uppercase text-white/60 mb-2">
              V. K. Umbarkar & Co.
            </div>
            <p className="text-xl font-semibold text-white leading-tight">
              From Compliance to Clarity.
            </p>
            <p className="text-vku-text-muted text-sm leading-relaxed">
              Chartered Accountants — Nagpur | Pune | Chhindwara | Wardha
            </p>
            <p className="text-vku-text-muted text-sm leading-relaxed">
              Established in 1986. A professional practice serving businesses and institutions through audit, taxation, finance and advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-vku-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-vku-text-muted hover:text-vku-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-base font-semibold text-vku-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-vku-text-muted hover:text-vku-orange transition-colors text-sm">Assurance</Link></li>
              <li><Link to="/services" className="text-vku-text-muted hover:text-vku-orange transition-colors text-sm">Tax & Regulatory Compliance</Link></li>
              <li><Link to="/services" className="text-vku-text-muted hover:text-vku-orange transition-colors text-sm">Advisory</Link></li>
              <li><Link to="/services" className="text-vku-text-muted hover:text-vku-orange transition-colors text-sm">Controller-as-a-Service</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-base font-semibold text-vku-white mb-6 uppercase tracking-wider">Our Offices</h4>
            <ul className="space-y-4">
              {[
                { city: "Nagpur", type: "Head Office" },
                { city: "Pune", type: "Branch Office" },
                { city: "Chhindwara", type: "Branch Office" },
                { city: "Wardha", type: "Branch Office" }
              ].map((office) => (
                <li key={office.city} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#7FC3E8] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-vku-white text-sm font-medium">{office.city}</span>
                    <span className="text-vku-text-muted text-xs block">{office.type}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-vku-text-secondary/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-vku-text-muted text-sm">
            &copy; {new Date().getFullYear()} V. K. Umbarkar & Co. — Chartered Accountants. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/contact" className="text-vku-text-muted hover:text-vku-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
