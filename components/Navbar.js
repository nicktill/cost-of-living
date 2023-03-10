import React, { useState } from 'react';
import { FaCalculator, FaUser, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleLightModeClick = () => {
    setIsLightMode(!isLightMode);
    document.body.style.backgroundColor = isLightMode ? 'rgb(255, 255, 255)' : 'rgb(21, 21, 21)';

    
    
  };

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <FaCalculator className="text-2xl font-bold text-gray-300" />
      <div className="flex-1 text-right">
        <button
          className="px-4 py-2 rounded-full text-gray-300 hover:text-white"
          onClick={handleLightModeClick}
        >
          <FaMoon className={`h-6 w-6 fill-current ${isLightMode ? 'text-white' : 'text-gray-300'}`} />
        </button>
        <button className="px-4 py-2 rounded-full text-gray-300 hover:text-white">
          <FaUser className="h-6 w-6 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
