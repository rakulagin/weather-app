import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

import { fetchWeather } from '../../redux/slices/weather';
import { RootState } from '../../redux/rootReducer';

import WeatherBlock from '../weatherBlock';
import LocationBlock from '../locationBlock';
import Carousel from '../carousel';
import Modal from '../modal/modal';

import styles from './weatherModule.module.css';

const WeatherModule = () => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();

	const [isOpen, setIsOpen] = useState(false);

	const getWeather = async () => {
		try {
			await dispatch(fetchWeather());
		} catch (error) {
			console.error('Error getting weather and forecast:', error);
		}
	};

	// useEffect(() => {
	// 	getWeather();
	// }, []);

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
