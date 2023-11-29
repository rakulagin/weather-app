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


	// const maxWidth = -(weatherBlockWidth * 7);
	const maxWidth = -724

	console.log('offset', offset)
	console.log('maxWidth', maxWidth)

	const handleLeftClick = () => {
		setOffset((currentOffset: number) => {
			const newOffset = currentOffset + weatherBlockWidth;
			return Math.min(newOffset, 0);
		});
	};

	const handleRightClick = () => {
		setOffset((currentOffset: number) => {
			const newOffset = currentOffset - weatherBlockWidth;
			console.log(newOffset);
			return Math.max(newOffset, maxWidth);
		});
	};

	const calculateBlockWidth = () => {
		if (blockRef.current) {
			const blockWidth = blockRef.current.clientWidth;
			setWeatherBlockWidth(blockWidth + 16);
		}
	};

	const calculateCarouselWidth = () => {
		if (windowRef.current) {
			const windowWidth = windowRef.current.clientWidth;

			console.log('windowWidth', windowWidth)
		}
	};

	useEffect(() => {
		calculateBlockWidth();
		calculateCarouselWidth()

		const handleResize = () => {
			calculateBlockWidth();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div ref={windowRef} className={styles.mainContainer}>
			<div
				onClick={handleLeftClick}
				className={classNames(styles.arrow, styles.arrowLeft)}
			>
				<IconArrow/>
			</div>
			<div className={styles.carouselContainer}>
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
				<IconArrow/>
			</div>
		</div>
	);
};

export default Carousel;
