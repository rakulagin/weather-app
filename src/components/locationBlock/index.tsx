import React, {FC, useState} from 'react';

import styles from './locationBlock.module.css';

interface I_LocationBlock {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationBlock: FC<I_LocationBlock> = ({setIsOpen}) => {

	const handleButtonClick = () => {
		setIsOpen(true)
	}


	return (
		<div className={styles.block}>
			<div className={styles.subBlock}>
				<p>Россия,</p>
				<h2>Самара</h2>
				<p>50.100202 50.100202</p>
			</div>
			<div className={styles.subBlock}>
				<h2>15:12:17</h2>
				<button onClick={handleButtonClick}>Изменить</button>
			</div>
		</div>
	);
};

export default LocationBlock;
