import React, { FC, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';

import { fetchCities } from '../../redux/slices/citySlice';

import useDebounce from '../../hooks/useDebounce';

import { getCurrentTime } from '../../helpers/formatTime';

import styles from './locationBlock.module.scss';

interface I_LocationBlock {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setIsInput: React.Dispatch<React.SetStateAction<boolean>>;
	isInput: boolean;

}

const LocationBlock: FC<I_LocationBlock> = ({ setIsOpen, isInput, setIsInput }) => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();

	const { selectedCity, location } = useSelector(
		(state: any) => state.cities.cities
	);

	// const [isInput, setIsInput] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');

	const debounce = useDebounce(inputValue, 1000);



	const handleChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleInputClick = () => {
		setIsInput(true);
	};

	const getCities = async (city: string) => {
		try {
			await dispatch(fetchCities(city));
		} catch (error) {
			console.error('Error getting weather and forecast:', error);
		}
	};

	useEffect(()=> {
		setIsInput(false);
	}, [selectedCity])

	useEffect(() => {
		getCities(debounce);
	}, [debounce]);

	return (
		<div onClick={(event: React.MouseEvent) => event.stopPropagation()} className={styles.block}>
			<div className={styles.subBlock}>
				<p>Россия,</p>
				<div>
					{!isInput ? (
						<>
							{selectedCity && selectedCity.value ? (
								<h2>{selectedCity.value}</h2>
							) : (
								<h2 className={styles.height24}>{location.data && location.value}</h2>
							)}
						</>
					) : (
						<input
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
					<p className={styles.height}>{location.data && location.data.geo_lat} {location.data && location.data.geo_lon}</p>
				)}
			</div>
			<div className={styles.subBlock}>
				<h2>{getCurrentTime()}</h2>
				<button onClick={handleInputClick}>Изменить</button>
			</div>
		</div>
	);
};

export default LocationBlock;
