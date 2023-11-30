import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';

import { fetchWeatherToday } from '../../redux/slices/weatherToday';
import { fetchCityByCords } from '../../redux/slices/citySlice';

import WeatherBlock from '../weatherBlock';
import LocationBlock from '../locationBlock';
import Carousel from '../carousel';
import Modal from '../modal';

import styles from './weatherModule.module.scss';

const WeatherModule = () => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();

	const { data, selectedCity, location } = useSelector((state: any) => state.cities.cities);

	const [isOpen, setIsOpen] = useState(false);

	const getWeather = async (city: string) => {
		try {
			await dispatch(fetchWeatherToday(city));
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
		if(!!selectedCity.data) {
			getWeather(selectedCity.data.city);
		// getWeatherForecast()
		}
	}, [selectedCity]);

	useEffect(() => {
		if (!!data.length) {
			setIsOpen(true);
		}
	}, [data]);

	useEffect(() => {
		if (!!location.data) {
			getWeather(location.data.city);
		}
	}, [location])

	useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(fetchCityByCords({latitude, longitude}))
          },
          (error) => {
            console.error(`Ошибка при получении местоположения: ${error.message}`);
          }
        );
      } else {
        console.error('Geolocation не поддерживается вашим браузером.');
      }
    };

    getLocation();
  }, []);

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
