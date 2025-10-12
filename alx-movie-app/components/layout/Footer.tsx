import React from 'react';
/**
 * The footer component displaying copyright and simple links.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 bg-gray-800 text-gray-400 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} ALX MovieApp Project. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-indigo-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;