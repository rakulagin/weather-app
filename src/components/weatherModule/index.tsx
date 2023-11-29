import React from 'react';

import WeatherBlock from '../weatherBlock';
import LocationBlock from '../locationBlock';
import Carousel from '../carousel'

import styles from './weatherModule.module.css';

const WeatherModule = () => {
	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<div className={styles.top}>
					<WeatherBlock />
					<LocationBlock />
				</div>
				<Carousel/>
			</div>
		</div>
	);
};

export default WeatherModule;
