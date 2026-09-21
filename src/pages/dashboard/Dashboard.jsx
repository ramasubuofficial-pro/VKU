import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-vku-text-primary">Dashboard</h1>
        <p className="text-vku-text-secondary mt-2">Welcome to your application dashboard.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder metric cards */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-vku-surface border border-vku-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-vku-text-secondary">Metric {item}</h3>
            <p className="text-3xl font-bold text-vku-primary mt-2">0</p>
          </div>
        ))}
      </div>
      
      <div className="bg-vku-surface border border-vku-border rounded-lg p-6 shadow-sm h-64 flex items-center justify-center">
        <p className="text-vku-text-muted">Dashboard Content Area</p>
      </div>
    </div>
  );
};

export default Dashboard;
