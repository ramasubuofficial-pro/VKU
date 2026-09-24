import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

/**
 * ContactMap
 * A placeholder component ready to integrate with Google Maps, Mapbox, or Leaflet.
 */
const ContactMap = ({ locationName, latitude, longitude }) => {
  return (
    <div className="py-24 bg-white border-y border-vku-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            title="Find Us"
            align="center"
          />
        </div>

        {/* Map Container */}
        <div className="w-full h-[500px] md:h-[600px] bg-vku-surface rounded-3xl overflow-hidden border border-vku-border relative group shadow-sm">

          {/* Decorative Map Background Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#175888 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>

          {/* Map Overlay content (Mock) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 backdrop-blur-[2px]">
            <div className="w-20 h-20 bg-vku-primary text-white rounded-full flex items-center justify-center shadow-2xl mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
              <MapPin className="w-10 h-10" />
            </div>

            <div className="bg-white/95 backdrop-blur-md px-8 py-6 rounded-2xl shadow-xl border border-white/50 max-w-sm w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {locationName}
              </h3>
              <p className="text-vku-text-muted text-sm font-mono bg-vku-surface inline-block px-3 py-1 rounded mb-4">
                {latitude.toFixed(4)}, {longitude.toFixed(4)}
              </p>
              <p className="text-gray-600 text-sm">
                Interactive map integration pending configuration. Coordinates synced dynamically.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactMap;
