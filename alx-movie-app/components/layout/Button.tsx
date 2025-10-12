import React from 'react';
interface LayoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

/**
 * A Button component specifically for use within layout structures (e.g., in the Header).
 */
const LayoutButton: React.FC<LayoutButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-3 py-1 font-medium rounded-full transition-colors';
  const primaryStyle = 'bg-indigo-500 text-white hover:bg-indigo-600';
  const secondaryStyle = 'bg-gray-700 text-gray-200 hover:bg-gray-600';

  const style = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${style}`}
    >
      {children}
    </button>
  );
};

export default LayoutButton;
