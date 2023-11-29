import React from 'react';

import styles from './locationBlock.module.css';

const LocationBlock = () => {
	return (
		<div className={styles.block}>
			<div className={styles.subBlock}>
				<p>Россия,</p>
				<h2>Самара</h2>
				<p>50.100202 50.100202</p>
			</div>
			<div className={styles.subBlock}>
				<h2>15:12:17</h2>
				<button>Изменить</button>
			</div>
		</div>
	);
};

export default LocationBlock;
