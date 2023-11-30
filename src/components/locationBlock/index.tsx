import React, { FC, useState } from 'react';

import useDebounce from '../../hooks/useDebounce';

import styles from './locationBlock.module.scss';

interface I_LocationBlock {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationBlock: FC<I_LocationBlock> = ({ setIsOpen }) => {
	const [isInput, setIsInput] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');

	const debounce = useDebounce(inputValue, 1000);

	const handleChange = (e: any) => {
		setInputValue(e.target.value);
	};

	console.log('debounce', debounce);

	const handleButtonClick = () => {
		setIsOpen(true);
	};

	const handleInputClick = () => {
		setIsInput(true);
	};

	return (
		<div className={styles.block}>
			<div className={styles.subBlock}>
				<p>Россия,</p>
				<div>
					{!isInput ? (
						<h2>Самара</h2>
					) : (
						<input
							value={inputValue}
							onChange={handleChange}
							className={styles.input}
							type='text'
						/>
					)}
				</div>

				<p>50.100202 50.100202</p>
			</div>
			<div className={styles.subBlock}>
				<h2>15:12:17</h2>
				<button onClick={handleInputClick}>Изменить</button>
			</div>
		</div>
	);
};

export default LocationBlock;
