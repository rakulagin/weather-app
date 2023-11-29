import React, { FC } from 'react';

import classNames from 'classnames';

import SunRain from '../../assets/images/weather/rain.png';
import TemperatureIcon from '../../assets/icons/temperature.png';
import PressureIcon from '../../assets/icons/pressure.png';
import WindIcon from '../../assets/icons/wind.png';

import styles from './weatherBlock.module.css';

interface I_Carousel {
	isCarousel?: boolean;
}

const WeatherBlock: FC<I_Carousel> = ({ isCarousel }) => {
	return (
		// <div className={styles.block}>
		<div
			className={classNames(styles.block, isCarousel && styles.blockInCarousel)}
		>
			<h2>Воскресенье, 17 Сетнября</h2>
			<p>облачно с прояснениями</p>
			<img className={styles.weatherPick} src={SunRain} alt='weather picture' />
			{isCarousel ? (
				<div className={styles.metricsInCarousel}>
					<p>Днем 14 С</p>
					<p className={styles.darken}>Ночью 11 С</p>
					<p>Ветер: юго-западный 4.04 м/с</p>
				</div>
			) : (
				<>
					<div className={styles.metrics}>
						<img
							className={styles.icon}
							src={TemperatureIcon}
							alt='temperature icon'
						/>
						<div>
							<p>За окном 14 С</p>
							<p>Ощущается как 12 С</p>
						</div>
					</div>
					<div className={styles.metrics}>
						<img
							className={styles.icon}
							src={PressureIcon}
							alt='pressure icon'
						/>
						<div>
							<p>Давление 773 мм. рт. ст.</p>
						</div>
					</div>
					<div className={styles.metrics}>
						<img className={styles.icon} src={WindIcon} alt='pressure icon' />
						<div>
							<p>Ветер: северо-западный</p>
						</div>
					</div>
					<p className={styles.link}>нажмите для просмотра подробностей</p>
				</>
			)}
		</div>
	);
};

export default WeatherBlock;