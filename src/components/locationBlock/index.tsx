import React, { FC, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';

import { fetchCities } from '../../redux/slices/citySlice';

import useDebounce from '../../hooks/useDebounce';

import styles from './locationBlock.module.scss';

interface I_LocationBlock {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationBlock: FC<I_LocationBlock> = ({ setIsOpen }) => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();

	const { data, selectedCity } = useSelector(
		(state: any) => state.cities.cities
	);

	const [isInput, setIsInput] = useState<boolean>(false);
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
		<div className={styles.block}>
			<div className={styles.subBlock}>
				<p>Россия,</p>
				<div>
					{!isInput ? (
						<>
							{selectedCity && selectedCity.value ? (
								<h2>{selectedCity.value}</h2>
							) : (
								<h2>Выберите город</h2>
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
						{selectedCity.data.geo_lat} {selectedCity.data.geo_lat}
					</p>
				) : (
					<p className={styles.height}></p>
				)}
			</div>
			<div className={styles.subBlock}>
				<h2>15:12:17</h2>
				<button onClick={handleInputClick}>Изменить</button>
			</div>
		</div>
	);
};

export default LocationBlock;
