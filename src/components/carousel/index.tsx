import React, { FC, useState, useEffect, useRef } from 'react';

import classNames from 'classnames';

import WeatherBlock from '../weatherBlock';

import IconArrow from '../custom/icon-arrow';

import styles from './carousel.module.css';

interface I_CarouselProps {
	items?: React.ReactNode[];
}

const Carousel: FC<I_CarouselProps> = () => {
	const blockRef = useRef<HTMLDivElement>(null);
	const windowRef = useRef<HTMLDivElement>(null);

	const [weatherBlockWidth, setWeatherBlockWidth] = useState(0);
	const [offset, setOffset] = useState(0);
	const [maxOffset, setMaxOffset] = useState(0);
	const [ratio, setRatio] = useState(0);

	const handleLeftClick = () => {
		const firstClick = offset === maxOffset ? weatherBlockWidth * ratio : 0;
		const newOffset = offset + weatherBlockWidth + firstClick;
		const value = Math.min(newOffset, 0);

		setOffset(value);
	};

	const handleRightClick = () => {
		const firstClick = offset === 0 && weatherBlockWidth >= 303 ? weatherBlockWidth * ratio : 0;
		const newOffset = offset - weatherBlockWidth - firstClick;
		const value = Math.max(newOffset, maxOffset);

		setOffset(value);

	};

	const calculateMaxOffset = () => {
		if (windowRef.current) {
			const temp =
				-(7 - windowRef.current.clientWidth / weatherBlockWidth) *
				weatherBlockWidth;
			setMaxOffset(temp);
		}
	};

	const calculateBlockWidth = () => {
		if (blockRef.current) {
			const blockWidth = blockRef.current.clientWidth;
			setWeatherBlockWidth(blockWidth + 16);
		}
		
	};

	const calculateRatio = () => {
		if (windowRef.current) {
			const temp =
				Math.ceil(windowRef.current.clientWidth / weatherBlockWidth) -
				windowRef.current.clientWidth / weatherBlockWidth;

			setRatio(temp);
		}
	};

	useEffect(() => {
		calculateMaxOffset();
		calculateRatio();
	}, [weatherBlockWidth, windowRef, offset]);

	useEffect(() => {
		calculateBlockWidth();
		calculateMaxOffset();
		calculateRatio();

		const handleResize = () => {
			calculateBlockWidth();
			setOffset(0)
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={styles.mainContainer}>
			<div
				onClick={handleLeftClick}
				className={classNames(styles.arrow, styles.arrowLeft)}
			>
				<IconArrow />
			</div>
			<div ref={windowRef} className={styles.carouselContainer}>
				<div
					className={styles.carousel}
					style={{ transform: `translateX(${offset}px)` }}
				>
					<div ref={blockRef}>
						<WeatherBlock isCarousel={true} />
					</div>
					<WeatherBlock isCarousel={true} />
					<WeatherBlock isCarousel={true} />
					<WeatherBlock isCarousel={true} />
					<WeatherBlock isCarousel={true} />
					<WeatherBlock isCarousel={true} />
					<WeatherBlock isCarousel={true} />
					<WeatherBlock isCarousel={true} />
				</div>
			</div>
			<div
				onClick={handleRightClick}
				className={classNames(styles.arrow, styles.arrowRight)}
			>
				<IconArrow />
			</div>
		</div>
	);
};

export default Carousel;
