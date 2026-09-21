import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-bold text-vku-primary">404</h1>
      <h2 className="text-3xl font-semibold text-vku-text-primary mt-4 mb-2">Page Not Found</h2>
      <p className="text-vku-text-secondary max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Return to Dashboard</Button>
      </Link>
    </div>
  );
};

export default NotFound;
