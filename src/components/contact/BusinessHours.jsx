import React, { useMemo } from 'react';
import Container from '../common/Container';
import { businessHours } from '../../data/contact';
import { Clock } from 'lucide-react';

const BusinessHours = () => {
  // Get current day string (e.g., "Monday")
  const currentDay = useMemo(() => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
  }, []);

  return (
    <div className="py-24 bg-white border-b border-vku-border">
      <Container className="max-w-[1000px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Text */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Standard Operating Hours
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our global advisory teams operate across multiple time zones. For urgent inquiries outside these standard hours, existing clients can use their dedicated support lines.
            </p>
            <div className="flex items-center text-vku-primary font-bold">
              <Clock className="w-5 h-5 mr-3" />
              <span>Times shown in local office time.</span>
            </div>
          </div>

          {/* Right Hours List */}
          <div className="w-full lg:w-7/12">
            <div className="bg-vku-surface border border-vku-border rounded-2xl overflow-hidden shadow-sm">
              <ul className="divide-y divide-vku-border/60">
                {businessHours.map((schedule, index) => {
                  const isToday = schedule.day === currentDay;
                  
                  return (
                    <li 
                      key={index} 
                      className={`flex justify-between items-center p-6 transition-colors duration-300 ${
                        isToday 
                          ? 'bg-vku-primary text-white' 
                          : 'bg-transparent text-gray-700 hover:bg-white'
                      }`}
                    >
                      <span className={`text-lg font-bold ${isToday ? 'text-white' : 'text-gray-800'}`}>
                        {schedule.day}
                        {isToday && <span className="ml-3 text-xs uppercase tracking-wider font-bold bg-white/20 px-2 py-1 rounded">Today</span>}
                      </span>
                      <span className={`text-lg font-medium ${isToday ? 'text-blue-50' : 'text-gray-600'}`}>
                        {schedule.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default BusinessHours;
