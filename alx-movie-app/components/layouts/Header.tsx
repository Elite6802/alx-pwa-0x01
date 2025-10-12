import React from 'react';

/**
 * The main header component for application navigation.
 */
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 p-4 bg-gray-900 shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-extrabold text-indigo-400">
          ALX MovieApp
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-300 hover:text-indigo-400">Home</a></li>
            <li><a href="/search" className="text-gray-300 hover:text-indigo-400">Search</a></li>
            <li><a href="/favorites" className="text-gray-300 hover:text-indigo-400">Favorites</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;