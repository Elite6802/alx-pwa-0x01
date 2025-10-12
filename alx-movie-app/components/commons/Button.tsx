import React from 'react';

// Define props for the common Button component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * A reusable Button component for common interactions.
 */
const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
