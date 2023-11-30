import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city: string) => {
  const api_key = "91a0432703258344dff18a8f3e884c7b"
  
  try {
    const response = await axios.get(
      `${apiUrl}/weather?q=самара&units=Metric&appid=${api_key}&lang=ru` 
    );
    return response;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
