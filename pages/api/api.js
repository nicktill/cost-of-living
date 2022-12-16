import axios from 'axios';

async function getCostOfLivingData(city) {
  const API_KEY = 'YOUR_API_KEY';
  const API_URL = `https://www.numbeo.com/api/cost-of-living?api_key=${API_KEY}&query=${city}`;
  
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
