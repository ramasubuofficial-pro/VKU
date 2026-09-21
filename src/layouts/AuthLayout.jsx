import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-vku-background p-4">
      <div className="w-full max-w-md bg-vku-surface rounded-lg shadow-sm border border-vku-border p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-vku-primary">App Logo</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
