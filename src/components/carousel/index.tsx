import React from 'react';

import styles from './carousel.module.css';

import WeatherBlock from '../weatherBlock';

const Carousel = () => {
	return (
		<div className={styles.carouselContainer}>
			<div className={styles.carousel}>
				<WeatherBlock isCarousel={true} />
				<WeatherBlock isCarousel={true} />
				<WeatherBlock isCarousel={true} />
				<WeatherBlock isCarousel={true} />
				<WeatherBlock isCarousel={true} />
				<WeatherBlock isCarousel={true} />
			</div>
		</div>
	);
};

export default Carousel;
