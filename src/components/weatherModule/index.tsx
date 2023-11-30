import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

import { fetchWeatherToday } from '../../redux/slices/weatherToday';
import { RootState } from '../../redux/rootReducer';

import WeatherBlock from '../weatherBlock';
import LocationBlock from '../locationBlock';
import Carousel from '../carousel';
import Modal from '../modal';

import styles from './weatherModule.module.css';

const WeatherModule = () => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();

	const { data } = useSelector((state: any) => state.cities.cities);

	console.log('data', data);

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

	useEffect(() => {
		// getWeather();
		// getWeatherForecast()
	}, []);

	useEffect(() => {
		if (!!data.length) {
			setIsOpen(true);
		}
	}, [data]);

	return (
		<>
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.top}>
						<WeatherBlock />
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
