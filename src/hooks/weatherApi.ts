import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5';
const api_key = '91a0432703258344dff18a8f3e884c7b';

export const getWeatherToday = async (city: string) => {
	try {
		const response = await axios.get(
			`${apiUrl}/weather?q=${city}&units=Metric&appid=${api_key}&lang=ru`
		);
		return response;
	} catch (error) {
		console.error('Error fetching weather:', error);
		throw error;
	}
};

export const getWeatherForecast = async (city: string) => {
	try {
	  const response = await axios.get(
	    `${apiUrl}/forecast?q=${city}&units=Metric&appid=${api_key}&lang=ru`
	  );

	  return response;
	} catch (error) {
	  console.error('Error fetching weather:', error);
	  throw error;
	}
};
