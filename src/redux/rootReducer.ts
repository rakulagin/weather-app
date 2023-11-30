import { combineReducers } from '@reduxjs/toolkit';
import { weatherTodayReducer } from './slices/weatherToday';
import { weatherForecastReducer } from './slices/weatherForecast';
import { citiesReducer } from './slices/citySlice';

const rootReducer = combineReducers({
	weatherToday: weatherTodayReducer,
	weatherForecast: weatherForecastReducer,
	cities: citiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
