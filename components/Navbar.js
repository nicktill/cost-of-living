import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <h1 className="text-2xl font-bold text-gray-300">COL</h1>
      <button className="px-4 py-2 rounded-full text-gray-300 hover:text-white">
        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 10c4.42 0 8 1.79 8 4v2h-16v-2c0-2.21 3.58-4 8-4z"/>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
