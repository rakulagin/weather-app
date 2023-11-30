import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { formatWind } from '../../helpers/formatWind';
import {
	formatDateTimestamp,
	formatNowDateTimestamp,
} from '../../helpers/formatTime';

import TemperatureIcon from '../../assets/icons/temperature.png';
import SunRain from '../../assets/images/weather/rain.png';
import PressureIcon from '../../assets/icons/pressure.png';
import WindIcon from '../../assets/icons/wind.png';

import styles from './weatherBlock.module.scss';

interface I_Carousel {
	isCarousel?: boolean;
	isToday?: boolean;
	weatherMini?: any;
	tempMini?: any;
	timeMini?: any;
	windMini?: any;
	ref?: any;
}

const WeatherBlock: FC<I_Carousel> = ({
	weatherMini,
	isCarousel,
	tempMini,
	timeMini,
	windMini,
	isToday,
	ref,
}) => {
	const { windSpeed, feelsLike, pressure, status, data, temp, wind } =
		useSelector((state: any) => state.weatherToday.weatherToday);

	return (
		<div
			ref={ref}
			className={classNames(
				styles.mainBlock,
				isCarousel ? styles.blockInCarousel : styles.block,
				status !== 'loaded' && styles.blur
			)}
		>
			{isToday ? (
				<h2>{data && formatDateTimestamp(data.dt)}</h2>
			) : isCarousel ? (
				<h2>{formatDateTimestamp(timeMini)}</h2>
			) : (
				<h2>{data && formatDateTimestamp(data.dt)}</h2>
			)}
			{status === 'loaded' ? (
				<>
					{isToday ? (
						<p>{data && data.weather[0].description}</p>
					) : isCarousel ? (
						<p>{weatherMini && weatherMini[0].description}</p>
					) : (
						<p>{status === 'loaded' && data.weather[0].description}</p>
					)}
				</>
			) : (
				<p className={styles.height}></p>
			)}
			<img className={styles.weatherPick} src={SunRain} alt='weather' />
			{isToday ? (
				<div className={styles.metricsInCarousel}>
					<p>Температура {temp && temp} С</p>
					<p className={styles.darken}>
						Ощущается как {feelsLike && feelsLike} С
					</p>
					<p>
						Ветер: {wind && formatWind(wind)} {windSpeed && windSpeed} м/с
					</p>
				</div>
			) : isCarousel ? (
				<div className={styles.metricsInCarousel}>
					<p>Температура {tempMini && tempMini.temp_min} С</p>
					<p className={styles.darken}>
						Ощущается как {tempMini && tempMini.temp_max} С
					</p>
					<p>
						Ветер: {windMini && formatWind(windMini.deg)}{' '}
						{windMini && windMini.speed} м/с
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
