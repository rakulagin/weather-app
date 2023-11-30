import React, { useState } from 'react';

import { getWeatherByCity } from '../../hooks/weatherApi';

import WeatherBlock from '../weatherBlock';
import LocationBlock from '../locationBlock';
import Carousel from '../carousel';
import Modal from '../modal/modal';

import styles from './weatherModule.module.css';

const WeatherModule = () => {
	const [isOpen, setIsOpen] = useState(false);

	const test = async () => {
		try {
      const weatherData = await getWeatherByCity("456");
console.log('weatherData', weatherData)

    } catch (error) {
      console.error('Error getting weather and forecast:', error);
    }
	}

	return (
		<>
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.top}>
						<WeatherBlock />
						<button onClick={test}>123123123</button>
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
