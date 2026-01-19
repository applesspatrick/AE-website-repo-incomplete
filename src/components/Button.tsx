import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105';

  const variantClasses = {
    primary: 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-rose-500 hover:bg-gray-50 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-rose-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
