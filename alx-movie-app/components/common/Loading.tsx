import React from 'react';

/**
 * A simple loading indicator component.
 */
const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      {/* Tailwind CSS spinner animation */}
      <div className="w-12 h-12 border-4 border-t-4 border-indigo-500 border-gray-200 rounded-full animate-spin"></div>
      <p className="ml-4 text-lg font-medium text-gray-700">Loading data...</p>
    </div>
  );
};

export default Loading;
