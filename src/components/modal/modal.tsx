import React, { FC } from 'react';

import styles from './modal.module.scss';

interface I_Modal {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<I_Modal> = ({ setIsOpen }) => {
	const handleOutsideClick = () => {
		setIsOpen(false);
	};

	return (
		<div className={styles.background} onClick={handleOutsideClick}>
			<div
				className={styles.modal}
				onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
			>
				<p className={styles.title}>Выберите населенный пункт</p>
        <div className={styles.list}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
      
        </div>
			</div>
		</div>
	);
};

export default Modal;
