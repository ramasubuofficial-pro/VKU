import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-colors duration-200';
  
  const variants = {
    primary: 'bg-vku-primary text-vku-white hover:bg-vku-primary-dark focus:ring-2 focus:ring-vku-primary focus:ring-offset-2',
    secondary: 'bg-vku-white border border-vku-primary text-vku-primary hover:bg-vku-primary-light focus:ring-2 focus:ring-vku-primary focus:ring-offset-2',
    accent: 'bg-vku-orange text-vku-white hover:opacity-90 focus:ring-2 focus:ring-vku-orange focus:ring-offset-2',
    success: 'bg-vku-success text-vku-white hover:opacity-90 focus:ring-2 focus:ring-vku-success focus:ring-offset-2',
    ghost: 'bg-transparent text-vku-primary hover:bg-vku-primary-light focus:ring-2 focus:ring-vku-primary focus:ring-offset-2',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const disabledStyles = disabled || isLoading ? 'opacity-50 cursor-not-allowed bg-vku-disabled-bg text-vku-disabled-text border-transparent' : 'cursor-pointer';
  
  // When disabled, we might want to override variant styles slightly, but opacity usually does the trick.
  // We've applied disabled specific bg/text colors in the disabledStyles.
  // Actually, to make it perfectly match the guidelines: disabled should use disabled tokens.
  const appliedVariant = (disabled || isLoading) ? 'bg-vku-disabled-bg text-vku-disabled-text border-transparent' : variants[variant];
  const pointerStyles = (disabled || isLoading) ? 'cursor-not-allowed' : 'cursor-pointer';
  
  const buttonStyles = `${baseStyles} ${appliedVariant} ${sizes[size]} ${pointerStyles} ${className}`;

  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && children}
    </button>
  );
};

export default Button;
