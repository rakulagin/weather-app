import React, { FC } from 'react';

import { useSelector } from 'react-redux';

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
	const { data, status } = useSelector(
		(state: any) => state.weather.weatherToday
	);

	return (
		<div
			className={classNames(
				styles.mainBlock,
				isCarousel ? styles.blockInCarousel : styles.block
			)}
		>
			<h2>Воскресенье, 17 Сетнября</h2>
			<p>{status === 'loaded' && data.weather[0].description}</p>
			<img className={styles.weatherPick} src={SunRain} alt='weather' />
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
							<p>За окном {data?.main?.temp} С</p>
							<p>Ощущается как {data?.main?.feels_like} С</p>
						</div>
					</div>
					<div className={styles.metrics}>
						<img
							className={styles.icon}
							src={PressureIcon}
							alt='pressure icon'
						/>
						<div>
							<p>Давление {data?.main?.pressure} мм. рт. ст.</p>
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
