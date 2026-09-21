import React from 'react';

const cityCoordinates = {
  'Nagpur': { x: 390, y: 500 },
  'Pune': { x: 260, y: 620 },
  'Chhindwara': { x: 390, y: 450 },
  'Wardha': { x: 360, y: 520 }
};

const IndiaMapIcon = ({ className, city = 'Nagpur' }) => {
  const coords = cityCoordinates[city] || cityCoordinates['Nagpur'];

  return (
    <svg 
      viewBox="0 0 1000 1000" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Detailed Graphic India Outline */}
      <path 
        d="M 330 20 L 370 10 L 420 15 L 450 70 L 430 130 L 400 150 L 430 200 L 450 220 L 520 240 L 580 270 L 620 250 L 650 250 L 700 230 L 750 210 L 820 220 L 880 250 L 850 350 L 830 420 L 800 480 L 750 460 L 720 410 L 680 420 L 650 460 L 620 520 L 580 600 L 520 700 L 470 800 L 440 900 L 380 980 L 330 920 L 290 820 L 260 700 L 230 600 L 230 550 L 160 520 L 100 500 L 120 450 L 180 460 L 80 430 L 120 380 L 180 400 L 200 350 L 230 250 L 260 180 L 280 100 Z" 
        stroke="#7A8086" 
        strokeWidth="20" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Dynamic Location Pin */}
      <g transform={`translate(${coords.x}, ${coords.y}) scale(8)`}>
        <path 
          d="M3 -2C3 -2 7 -10 7 -14C7 -18 4 -21 0 -21C-4 -21 -7 -18 -7 -14C-7 -10 -3 -2 -3 -2C-3 -2 -2 0 0 0C2 0 3 -2 3 -2Z" 
          fill="#98C15E"
        />
        <circle cx="0" cy="-14" r="3" fill="white" />
      </g>
    </svg>
  );
};

export default IndiaMapIcon;
