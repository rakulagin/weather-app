import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getWeatherByCity } from '../../hooks/weatherApi';

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeatherToday',
	async () => {
		const { data } = await getWeatherByCity('123');
		return data;
	}
);

const initialState = {
	weatherToday: {
		data: [],
		// temp: 0,
		// feelLike: 0,
		// maxTemp: 0,
		// minTemp: 0,
		status: 'loading',
	},
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchWeather.pending, (state, action) => {
			state.weatherToday.data = [];
			state.weatherToday.status = 'loading';
		});
		builder.addCase(fetchWeather.fulfilled, (state, action) => {
			state.weatherToday.data = action.payload;
			// state.weatherToday.temp = action.payload.data.temp
			// state.weatherToday.feelLike = action.payload.data.temp
			// state.weatherToday.maxTemp = action.payload.data.temp
			// state.weatherToday.minTemp = action.payload.data.temp
			state.weatherToday.status = 'loaded';
		});
		builder.addCase(fetchWeather.rejected, (state, action) => {
			state.weatherToday.data = [];
			state.weatherToday.status = 'loaded';
		});
	},
});

export const weatherReducer = weatherSlice.reducer;
