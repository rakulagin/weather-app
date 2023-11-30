import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getCities } from '../../hooks/citiesApi';

interface City {
	data?: any;
}

export const fetchCities = createAsyncThunk(
	'cities/fetchCities',
	async (city: string) => {
		const { suggestions } = await getCities(city);
		const filteredCities = suggestions.filter(
			(suggestion: City) => suggestion.data.geo_lat !== null
		);
		return filteredCities;
	}
);

const initialState = {
	cities: {
		data: [],
		selectedCity: {},
		status: 'loading',
	},
};

const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setSelectedCity: (state, action) => {
			state.cities.selectedCity = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCities.pending, (state, action) => {
			state.cities.data = [];
			state.cities.status = 'loading';
		});
		builder.addCase(fetchCities.fulfilled, (state, action) => {
			state.cities.data = action.payload;
			state.cities.status = 'loaded';
		});
		builder.addCase(fetchCities.rejected, (state, action) => {
			state.cities.data = [];
			state.cities.status = 'error';
		});
	},
});

export const { setSelectedCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
