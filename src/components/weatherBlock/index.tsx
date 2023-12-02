import { FC, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { formatWind } from '../../helpers/formatWind';
import {
	formatDateTimestamp
} from '../../helpers/formatTime';

import TemperatureIcon from '../../assets/icons/temperature.png';
import PressureIcon from '../../assets/icons/pressure.png';
import WindIcon from '../../assets/icons/wind.png';

import icon01d from '../../assets/icons/weatherPictures/01d.png';
import icon02d from '../../assets/icons/weatherPictures/02d.png';
import icon03d from '../../assets/icons/weatherPictures/03d.png';
import icon04d from '../../assets/icons/weatherPictures/04d.png';
import icon09d from '../../assets/icons/weatherPictures/09d.png';
import icon10d from '../../assets/icons/weatherPictures/10d.png';
import icon11d from '../../assets/icons/weatherPictures/11d.png';
import icon13d from '../../assets/icons/weatherPictures/13d.png';
import icon50d from '../../assets/icons/weatherPictures/50d.png';
import icon01n from '../../assets/icons/weatherPictures/01n.png';
import icon02n from '../../assets/icons/weatherPictures/02n.png';
import icon03n from '../../assets/icons/weatherPictures/03n.png';
import icon04n from '../../assets/icons/weatherPictures/04n.png';
import icon09n from '../../assets/icons/weatherPictures/09n.png';
import icon10n from '../../assets/icons/weatherPictures/10n.png';
import icon11n from '../../assets/icons/weatherPictures/11n.png';
import icon13n from '../../assets/icons/weatherPictures/13n.png';
import icon50n from '../../assets/icons/weatherPictures/50n.png';

import styles from './weatherBlock.module.scss';

interface I_Carousel {
	isCarousel?: boolean;
	isToday?: boolean;
	weatherMini?: any;
	tempMini?: any;
	timeMini?: any;
	windMini?: any;
}

const WeatherBlock: FC<I_Carousel> = ({
	weatherMini,
	isCarousel,
	tempMini,
	timeMini,
	windMini,
	isToday,
}) => {
	const { windSpeed, feelsLike, pressure, status, data, temp, wind } =
		useSelector((state: any) => state.weatherToday.weatherToday);

	const [icon, setIcon] = useState(icon01d);
	const [miniIcon, setMiniIcon] = useState(icon01d);

	useEffect(() => {
		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '01d') {
				setIcon(icon01d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '02d') {
				setIcon(icon02d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '03d') {
				setIcon(icon03d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '04d') {
				setIcon(icon04d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '09d') {
				setIcon(icon09d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '10d') {
				setIcon(icon10d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '11d') {
				setIcon(icon11d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '13d') {
				setIcon(icon13d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '50d') {
				setIcon(icon50d);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '01n') {
				setIcon(icon01n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '02n') {
				setIcon(icon02n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '03n') {
				setIcon(icon03n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '04n') {
				setIcon(icon04n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '09n') {
				setIcon(icon09n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '10n') {
				setIcon(icon10n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '11n') {
				setIcon(icon11n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '13n') {
				setIcon(icon13n);
			}
		}

		if (data.weather && data.weather[0]) {
			if (data.weather[0].icon === '50n') {
				setIcon(icon50n);
			}
		}
	}, [data]);

	useEffect(() => {
		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '01d') {
				setMiniIcon(icon01d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '02d') {
				setMiniIcon(icon02d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '03d') {
				setMiniIcon(icon03d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '04d') {
				setMiniIcon(icon04d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '09d') {
				setMiniIcon(icon09d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '10d') {
				setMiniIcon(icon10d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '11d') {
				setMiniIcon(icon11d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '13d') {
				setMiniIcon(icon13d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '50d') {
				setMiniIcon(icon50d);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '01n') {
				setMiniIcon(icon01n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '02n') {
				setMiniIcon(icon02n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '03n') {
				setMiniIcon(icon03n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '04n') {
				setMiniIcon(icon04n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '09n') {
				setMiniIcon(icon09n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '10n') {
				setMiniIcon(icon10n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '11n') {
				setMiniIcon(icon11n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '13n') {
				setMiniIcon(icon13n);
			}
		}

		if (weatherMini && weatherMini[0]) {
			if (weatherMini[0].icon === '50n') {
				setMiniIcon(icon50n);
			}
		}
	}, [weatherMini]);

	return (
		<div
			className={classNames(
				styles.mainBlock,
				isCarousel ? styles.blockInCarousel : styles.block,
				status !== 'loaded' && styles.blur
			)}
		>
			{isToday ? (
				<h2 className={styles.height48}>
					{data.dt && formatDateTimestamp(data.dt)}
				</h2>
			) : isCarousel ? (
				<h2 className={styles.height48}>{formatDateTimestamp(timeMini)}</h2>
			) : (
				<h2 className={styles.height48}>
					{data.dt && formatDateTimestamp(data.dt)}
				</h2>
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
				<p className={styles.height16}></p>
			)}
			{status === 'loaded' ? (
				<img
					className={styles.weatherPick}
					src={isCarousel && isToday ? icon : isCarousel ? miniIcon : icon}
					alt='weather'
				/>
			) : (
				<div className={styles.weatherPick}></div>
			)}
			{isToday ? (
				<div className={styles.metricsInCarousel}>
					<p>Температура {temp && Math.round(temp)} С</p>
					<p className={styles.darken}>
						Ощущается как {feelsLike && Math.round(feelsLike)} С
					</p>
					<p>
						Ветер: {wind && formatWind(wind)} {windSpeed && windSpeed} м/с
					</p>
				</div>
			) : isCarousel ? (
				<div className={styles.metricsInCarousel}>
					<p>Температура {tempMini && Math.round(tempMini.temp_min)} &#8451;</p>
					<p className={styles.darken}>
						Ощущается как {tempMini && Math.round(tempMini.temp_max)} &#8451;
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
							<p>За окном {Math.round(temp)} &#8451;</p>
							<p>Ощущается как {Math.round(feelsLike)} &#8451;</p>
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
