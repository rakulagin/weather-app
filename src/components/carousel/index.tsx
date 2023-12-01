import React, { FC, useState, useEffect, useRef } from 'react';

import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import WeatherBlock from '../weatherBlock';

import IconArrow from '../custom/icon-arrow';

import styles from './carousel.module.scss';

const Carousel: FC = () => {
	const { list } = useSelector(
		(state: RootState) => state.weatherForecast.weatherForecast
	);

	const blockRef = useRef<HTMLDivElement>(null);
	const windowRef = useRef<HTMLDivElement>(null);

	const [weatherBlockWidth, setWeatherBlockWidth] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [maxOffset, setMaxOffset] = useState<number>(0);
  const [ratio, setRatio] = useState<number>(0);

	const handleLeftClick = () => {
		const firstClick = offset === maxOffset ? weatherBlockWidth * ratio : 0;
		const newOffset = offset + weatherBlockWidth + firstClick;
		const value = Math.min(newOffset, 0);

		setOffset(value);
	};

	// 303 это проверка на то отображается блок в мобильной или десктопной версии
	const handleRightClick = () => {
		const firstClick =
			offset === 0 && weatherBlockWidth >= 303 ? weatherBlockWidth * ratio : 0;
		const newOffset = offset - weatherBlockWidth - firstClick;
		const value = Math.max(newOffset, maxOffset);

		setOffset(value);
	};

	// нужна для того чтобы высчитать на сколько сдвинуть первый блок при первом клике
	const calculateMaxOffset = () => {
		if (windowRef.current) {
			const temp =
				-(list.length - windowRef.current.clientWidth / weatherBlockWidth) *
				weatherBlockWidth;
			setMaxOffset(temp);
		}
	};

	// 16 это gap между карточками
	const calculateBlockWidth = () => {
		if (blockRef.current) {
			const blockWidth = blockRef.current.clientWidth;
			setWeatherBlockWidth(blockWidth + 16);
		}
	};

	const calculateRatio = () => {
		if (windowRef.current) {
			const temp =
				Math.floor(windowRef.current.clientWidth / weatherBlockWidth) -
				windowRef.current.clientWidth / weatherBlockWidth;

			setRatio(temp);
		}
	};

	useEffect(() => {
		calculateMaxOffset();
		calculateRatio();
	}, [weatherBlockWidth, windowRef, offset, maxOffset, ratio, list]);

	useEffect(() => {
		calculateBlockWidth();
		calculateMaxOffset();
		calculateRatio();

		const handleResize = () => {
			calculateBlockWidth();
			setOffset(0);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [weatherBlockWidth, windowRef, offset, maxOffset, ratio, list]);

	useEffect(()=>{
		setOffset(0)
	}, [list])

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
						<WeatherBlock isToday={true} isCarousel={true} />
					</div>
					{list &&
						list.map((el: any, index: number) => (
							<WeatherBlock
								weatherMini={el.weather}
								tempMini={el.main}
								windMini={el.wind}
								isCarousel={true}
								timeMini={el.dt}
								key={index}
							/>
						))}
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
