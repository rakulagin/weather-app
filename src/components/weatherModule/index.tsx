import React, { useState } from 'react';

import WeatherBlock from '../weatherBlock';
import LocationBlock from '../locationBlock';
import Carousel from '../carousel';
import Modal from '../modal/modal';

import styles from './weatherModule.module.css';

const WeatherModule = () => {
	const [isOpen, setIsOpen] = useState(false);

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
