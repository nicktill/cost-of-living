import React, { useState } from 'react';
import Navbar from './Navbar';

const CostOfLivingCalculator = () => {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold text-white text-indigo-200">Cost of Living Calculator</h1>
      <p className="text-lg text-gray-500 pb-6">
        Compare the cost of living in two different cities using this calculator.
      </p>
      <div className="w-full max-w-xs">
        <label className="block font-bold text-sm mb-2 text-white font-system-ui">City #1</label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-system-ui"
          type="text"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          placeholder="Where you live?"
        />
      </div>
      <div className="w-full max-w-xs mt-4">
        <label className="block font-bold text-sm mb-2 text-white font-system-ui">City #2</label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-system-ui"
          type="text"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          placeholder="Where do you want to live?"

        />
      </div>
      <button
        className="w-full max-w-xs mt-4 px-4 py-2 font-bold text-white bg-indigo-200 rounded-full hover:bg-indigo-300 focus:outline-none font-system-ui"
        onClick={() => {
          // Call the function to compare the cost of living in city1 and city2
        //   compareCostOfLiving(city1, city2);
        }}
      >
        Compare
      </button>
    </div>
    </>
    
  );
};

export default CostOfLivingCalculator;
