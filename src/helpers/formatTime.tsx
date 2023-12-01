// 1701414843 => Понедельник, 1 января в 00:00
export const formatDateTimestamp = (timestamp: number): JSX.Element => {
	try {
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		};

		const formattedDate = new Date(timestamp * 1000).toLocaleString(
			'ru-RU',
			options
		);

		const [date, time] = formattedDate.split(', ');

		return (
			<>
				{date}, <br />
				{time}
			</>
		);
	} catch (error) {
		console.error('Error formatting timestamp:', error);
		return <></>;
	}
};

// текущее время в 00:00:00
export const getCurrentTime = (): string => {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');

	return `${hours}:${minutes}:${seconds}`;
};

// 1701414843 => 00:00:00
export const formatTimestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

// 36000 => 00:00:00
export const formatTimeWithTimezone = (timezone: number) => {
  const currentDate = new Date();
  const adjustedDate = new Date(currentDate.getTime() + timezone * 1000);

  const hours = adjustedDate.getUTCHours().toString().padStart(2, '0');
  const minutes = adjustedDate.getUTCMinutes().toString().padStart(2, '0');
  const seconds = adjustedDate.getUTCSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}
