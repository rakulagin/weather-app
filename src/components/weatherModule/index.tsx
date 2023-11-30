import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

import { fetchWeatherToday } from '../../redux/slices/weatherToday';
import { fetchCities } from '../../redux/slices/citySlice';
import { RootState } from '../../redux/rootReducer';

import WeatherBlock from '../weatherBlock';
import LocationBlock from '../locationBlock';
import Carousel from '../carousel';
import Modal from '../modal/modal';

import styles from './weatherModule.module.css';

import { formatWind } from '../../helpers/formatWind';
import { getCities } from '../../hooks/citiesApi';

const WeatherModule = () => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();

	const [isOpen, setIsOpen] = useState(false);

	const getWeather = async () => {
		try {
			await dispatch(fetchWeatherToday());
		} catch (error) {
			console.error('Error getting weather and forecast:', error);
		}
	};

	const getWeatherForecast = async () => {
		// try {
		// 	await dispatch(fetchWeatherForecast());
		// } catch (error) {
		// 	console.error('Error getting weather and forecast:', error);
		// }
	};

	const getCities = async () => {
		try {
			await dispatch(fetchCities('сам'));
		} catch (error) {
			console.error('Error getting weather and forecast:', error);
		}
	};

	useEffect(() => {
		// getWeather();
		// getWeatherForecast()
	}, []);

	return (
		<>
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.top}>
						<WeatherBlock />
						<button onClick={getCities}>123123123</button>
						<LocationBlock setIsOpen={setIsOpen} />
					</div>
					<Carousel />
				</div>
			</div>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</>
	);
};

export default WeatherModule;
