import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getWeatherForecast } from '../../hooks/weatherApi';

export const fetchWeatherForecast = createAsyncThunk('weatherForecast/fetchWeatherForecast', async (city: string) => {
	const  {data}  = await getWeatherForecast(city);
	console.log('data', data)
	return data
})

const initialState = {
	weatherForecast: {
		list: [],
		status: 'loading',
	},
};

const weatherForecastSlice = createSlice({
	name: 'weatherForecast',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchWeatherForecast.pending, (state, action) => {
			// state.weatherToday.data = [];
			state.weatherForecast.status = 'loading';
		});
		builder.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
			state.weatherForecast.list = action.payload.list;
			// state.weatherToday.temp = action.payload.main.temp
			// state.weatherToday.feelsLike = action.payload.main.feels_like
			// state.weatherToday.pressure = action.payload.main.pressure
			// state.weatherToday.wind = action.payload.wind.deg
			// state.weatherToday.maxTemp = action.payload.main.temp_max
			// state.weatherToday.minTemp = action.payload.main.temp_min
			state.weatherForecast.status = 'loaded';
		});
		builder.addCase(fetchWeatherForecast.rejected, (state, action) => {
			// state.weatherToday.data = [];
			state.weatherForecast.status = 'error';
		});
	},
});

export const weatherForecastReducer = weatherForecastSlice.reducer;
