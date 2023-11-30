import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getWeatherForecast } from '../../hooks/weatherApi';

export const fetchWeatherForecast = createAsyncThunk('weatherForecast/fetchWeatherForecast', async (city: string) => {
	const  {data}  = await getWeatherForecast(city);
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
			state.weatherForecast.list = [];
			state.weatherForecast.status = 'loading';
		});
		builder.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
			state.weatherForecast.list = action.payload.list;
			state.weatherForecast.status = 'loaded';
		});
		builder.addCase(fetchWeatherForecast.rejected, (state, action) => {
			state.weatherForecast.list = [];
			state.weatherForecast.status = 'error';
		});
	},
});

export const weatherForecastReducer = weatherForecastSlice.reducer;
