import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';

import { setSelectedCity } from '../../redux/slices/citySlice';

import styles from './modal.module.scss';

interface I_Modal {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<I_Modal> = ({ setIsOpen }) => {
	const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
		useDispatch();
	const { data } = useSelector((state: any) => state.cities.cities);

	const handleSelectCity = (city: any) => {
		dispatch(setSelectedCity(city));
		setIsOpen(false);
	};

	const handleCloseClick = () => {
		setIsOpen(false);
	};

	return (
		<div className={styles.modal}>
			<div className={styles.top}>
				<p className={styles.title}>Выберите населенный пункт</p>
				<span className={styles.close} onClick={handleCloseClick}>
					X
				</span>
			</div>
			<div className={styles.list}>
				{data.map((el: any, index: number) => (
					<div
						key={index}
						className={styles.item}
						onClick={() => handleSelectCity(el)}
					>
						{el.value}
					</div>
				))}
			</div>
		</div>
	);
};

export default Modal;
