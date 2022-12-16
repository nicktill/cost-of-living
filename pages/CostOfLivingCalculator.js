import axios from 'axios';
import { useState } from 'react';

const CostOfLivingCalculator = () => {
  const [costOfLivingData, setCostOfLivingData] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);


  const fetchCostOfLivingData = async (city) => {
    try {
      const response = await axios.get(
        `https://cities-cost-of-living1.p.rapidapi.com/city`,
        {
          headers: {
            "X-RapidAPI-Key": "03b546ade4msh17bd6a1f86a171dp1bd4c5jsnf11a3fd6b99e",
            "X-RapidAPI-Host": "cities-cost-of-living1.p.rapidapi.com"
          },
          params: {
            name: city
          }
        }
      );
      setCostOfLivingData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h1>Cost of Living Calculator</h1>
      <select
        className="bg-white rounded-sm block appearance-none focus:outline-none focus:shadow-outline"
        value={selectedCities[0]}
        onChange={(event) => {
            fetchCostOfLivingData(event.target.value);
            setSelectedCities([event.target.value, selectedCities[1]]);
        }}
        >
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
        </select>
    </div>
  );
};

export default CostOfLivingCalculator;
