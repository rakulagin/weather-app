import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city: string) => {
  const api_key = "91a0432703258344dff18a8f3e884c7b"

  console.log("hook")
  try {
    const response = await axios.get(
      `${apiUrl}/weather?q=Знаменск&units=Metric&appid=${api_key}` 
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
