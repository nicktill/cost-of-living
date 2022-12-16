import React, { useState } from 'react';

const CostOfLivingCalculator = () => {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full max-w-xs">
        <label className="block font-bold text-xl mb-2 text-white">City 1</label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
        />
      </div>
      <div className="w-full max-w-xs mt-4">
        <label className="block font-bold text-xl mb-2 text-white">City 2</label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
        />
      </div>
      <button
        className="w-full max-w-xs mt-4 px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none"
        onClick={() => {
          // Call the function to compare the cost of living in city1 and city2
          compareCostOfLiving(city1, city2);
        }}
      >
        Compare
      </button>
    </div>
  );
};

export default CostOfLivingCalculator;
