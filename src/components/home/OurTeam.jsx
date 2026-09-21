import React from 'react';
import Container from '../common/Container';

const defaultTeamMembers = [
  { name: "Ananth", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Ananth" },
  { name: "Gopal", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Gopal" },
  { name: "Guru", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Guru" },
  { name: "Heena", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Heena" },
  { name: "Suresh", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Suresh" },
  { name: "Priya", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Priya" },
  { name: "Rajesh", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Rajesh" },
  { name: "Kavita", image: "https://placehold.co/400x400/F3F4F6/9CA3AF?text=Kavita" }
];

const OurTeam = ({ data = defaultTeamMembers, title = "Our team", description }) => {
  return (
    <div className="py-24 bg-white border-t border-gray-200">
      <Container className="max-w-[1200px]">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center md:text-left">
            {title}
          </h2>
          {description && (
            <p className="text-gray-500 max-w-2xl text-center md:text-left">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {data.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full aspect-square overflow-hidden mb-6 bg-gray-50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {member.name}
              </h3>
              {member.designation && (
                <p className="text-sm font-medium text-vku-orange mt-1 text-center">{member.designation}</p>
              )}
              {member.bio && (
                <p className="text-sm text-gray-500 mt-3 text-center line-clamp-3">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
