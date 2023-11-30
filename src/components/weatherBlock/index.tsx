import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { formatWind } from '../../helpers/formatWind';

import SunRain from '../../assets/images/weather/rain.png';
import TemperatureIcon from '../../assets/icons/temperature.png';
import PressureIcon from '../../assets/icons/pressure.png';
import WindIcon from '../../assets/icons/wind.png';

import styles from './weatherBlock.module.scss';

interface I_Carousel {
	isCarousel?: boolean;
	ref?: any;
}

const WeatherBlock: FC<I_Carousel> = ({ isCarousel, ref }) => {
	const {
		data,
		temp,
		feelsLike,
		pressure,
		wind,
		windSpeed,
		maxTemp,
		minTemp,
		status,
	} = useSelector((state: any) => state.weatherToday.weatherToday);

	return (
		<div
			ref={ref}
			className={classNames(
				styles.mainBlock,
				isCarousel ? styles.blockInCarousel : styles.block, status !== 'loaded' && styles.blur
			)}
		>
			<h2>Воскресенье, 17 Сетнября</h2>
			{status === 'loaded' ? <p>{status === 'loaded' && data.weather[0].description}</p> : <p className={styles.height}></p>}
			<img className={styles.weatherPick} src={SunRain} alt='weather' />
			{isCarousel ? (
				<div className={styles.metricsInCarousel}>
					<p>Днем {maxTemp} С</p>
					<p className={styles.darken}>Ночью {minTemp} С</p>
					<p>
						Ветер: {formatWind(wind)} {windSpeed} м/с
					</p>
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
							<p>За окном {temp} С</p>
							<p>Ощущается как {feelsLike} С</p>
						</div>
					</div>
					<div className={styles.metrics}>
						<img
							className={styles.icon}
							src={PressureIcon}
							alt='pressure icon'
						/>
						<div>
							<p>Давление {pressure} мм. рт. ст.</p>
						</div>
					</div>
					<div className={styles.metrics}>
						<img className={styles.icon} src={WindIcon} alt='pressure icon' />
						<div>
							<p>
								Ветер: {formatWind(wind)} {windSpeed} м/с
							</p>
						</div>
					</div>
					<p className={styles.link}>нажмите для просмотра подробностей</p>
				</>
			)}
		</div>
	);
};

export default WeatherBlock;
