import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate setting auth token
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-vku-text-primary mb-6 text-center">Sign in to your account</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-vku-text-secondary mb-1">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-vku-border bg-vku-white text-vku-text-primary placeholder:text-vku-text-muted rounded-md focus:outline-none focus:ring-2 focus:ring-vku-primary focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-vku-text-secondary mb-1">
            Password
          </label>
          <input
            type="password"
            required
            className="w-full px-3 py-2 border border-vku-border bg-vku-white text-vku-text-primary placeholder:text-vku-text-muted rounded-md focus:outline-none focus:ring-2 focus:ring-vku-primary focus:border-transparent"
            placeholder="••••••••"
          />
        </div>
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full"
            variant="primary"
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
