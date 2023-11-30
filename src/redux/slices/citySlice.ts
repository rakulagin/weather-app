import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getCities } from '../../hooks/citiesApi';


export const fetchCities = createAsyncThunk(
	'cities/fetchCities',
	async (city: string) => {
		const   data   = await getCities(city);
    return data;
	}
);

const initialState = {
	cities: {
		data: [],
		
		status: 'loading',
	},
};

const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {},
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

export const citiesReducer = citiesSlice.reducer;
