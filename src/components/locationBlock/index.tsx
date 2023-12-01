import React, { FC, useEffect } from 'react';

import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';

import { fetchCities } from '../../redux/slices/citySlice';

import useDebounce from '../../hooks/useDebounce';

import { formatTimeWithTimezone } from '../../helpers/formatTime';

import styles from './locationBlock.module.scss';

interface I_LocationBlock {
	setIsInput: React.Dispatch<React.SetStateAction<boolean>>;
	isInput: boolean;
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const LocationBlock: FC<I_LocationBlock> = ({ isInput, setIsInput, inputValue, setInputValue }) => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();

	const { selectedCity, location } = useSelector(
		(state: any) => state.cities.cities
	);
	const { data } = useSelector((state: RootState) => state.weatherToday.weatherToday)

	const debounce = useDebounce(inputValue, 1000);

	const handleChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleInputClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		setIsInput(true);
	};

	const getCities = async (city: string) => {
		try {
			await dispatch(fetchCities(city));
		} catch (error) {
			console.error('Error getting weather and forecast:', error);
		}
	};

	useEffect(() => {
		setIsInput(false);
		setInputValue('')
	}, [selectedCity]);

	useEffect(() => {
		getCities(debounce);
	}, [debounce]);

	return (
		<div className={styles.block}>
			<div className={styles.subBlock}>
				<p>Россия,</p>
				<div>
					{!isInput ? (
						<>
							{selectedCity && selectedCity.value ? (
								<h2 className={styles.title}>{selectedCity.value}</h2>
							) : (
								<h2 className={classNames(styles.height24, styles.title)}>
									{location.data && location.value}
								</h2>
							)}
						</>
					) : (
						<input
							onClick={(event: React.MouseEvent) => event.stopPropagation()}
							value={inputValue}
							onChange={handleChange}
							className={styles.input}
							type='text'
						/>
					)}
				</div>

				{selectedCity && selectedCity?.data ? (
					<p>
						{selectedCity.data.geo_lat} {selectedCity.data.geo_lon}
					</p>
				) : (
					<p className={styles.height16}>
						{location.data && location.data.geo_lat}{' '}
						{location.data && location.data.geo_lon}
					</p>
				)}
			</div>
			<div className={styles.subBlock}>
				{/* <h2>{getCurrentTime()}</h2> */}
				<h2>{data && formatTimeWithTimezone(data.timezone)}</h2>
				<button onClick={event => handleInputClick(event)}>Изменить</button>
			</div>
		</div>
	);
};

export default LocationBlock;
