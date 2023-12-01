import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getWeatherToday } from '../../hooks/weatherApi';

export const fetchWeatherToday = createAsyncThunk(
	'weatherToday/fetchWeatherToday',
	async (city: string) => {
		const { data } = await getWeatherToday(city);
		return data;
	}
);

interface WeatherTodayData {
  timezone: number;
}

interface WeatherTodayState {
  weatherToday: {
    data: WeatherTodayData;
    list: any[];
    temp: number;
    feelsLike: number;
    pressure: number;
    wind: number;
    windSpeed: number;
    maxTemp: number;
    minTemp: number;
    status: string;
  };
}

const initialState: WeatherTodayState = {
  weatherToday: {
    data: {
      timezone: 0,
    },
    list: [],
    temp: 0,
    feelsLike: 0,
    pressure: 0,
    wind: 0,
    windSpeed: 0,
    maxTemp: 0,
    minTemp: 0,
    status: 'loading',
  },
};

const weatherTodaySlice = createSlice({
	name: 'weatherToday',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchWeatherToday.pending, (state, action) => {
			state.weatherToday.status = 'loading';
		});
		builder.addCase(fetchWeatherToday.fulfilled, (state, action) => {
			state.weatherToday.data = action.payload;
			state.weatherToday.temp = action.payload.main.temp;
			state.weatherToday.feelsLike = action.payload.main.feels_like;
			state.weatherToday.pressure = action.payload.main.pressure;
			state.weatherToday.wind = action.payload.wind.deg;
			state.weatherToday.windSpeed = action.payload.wind.speed;
			state.weatherToday.maxTemp = action.payload.main.temp_max;
			state.weatherToday.minTemp = action.payload.main.temp_min;
			state.weatherToday.status = 'loaded';
		});
		builder.addCase(fetchWeatherToday.rejected, (state, action) => {
			state.weatherToday.status = 'error';
		});
	},
});

export const weatherTodayReducer = weatherTodaySlice.reducer;
