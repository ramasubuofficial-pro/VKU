import React from 'react';
import Container from '../common/Container';

const MissionVision = ({ missionData, visionData }) => {
  const MissionIcon = missionData.icon;
  const VisionIcon = visionData.icon;

  return (
    <div className="py-24 bg-vku-surface border-y border-vku-border">
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Mission */}
          <div className="bg-white p-12 rounded-2xl border border-vku-border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <MissionIcon className="w-8 h-8 text-vku-primary stroke-[2]" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {missionData.title}
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed flex-1">
              {missionData.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-12 rounded-2xl border border-vku-border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
              <VisionIcon className="w-8 h-8 text-vku-green stroke-[2]" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {visionData.title}
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed flex-1">
              {visionData.description}
            </p>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default MissionVision;
