import React from 'react';

import styles from './carousel.module.css'

import WeatherBlock from '../weatherBlock';

const Carousel = () => {
	return (
		<div className={styles.carousel}>
			<WeatherBlock isCarousel={true} />
			<WeatherBlock isCarousel={true} />
			<WeatherBlock isCarousel={true} />
			<WeatherBlock isCarousel={true} />
		</div>
	);
};

export default Carousel;
