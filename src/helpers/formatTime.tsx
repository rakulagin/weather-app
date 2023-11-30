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

    const formattedDate = new Date(timestamp * 1000).toLocaleString('ru-RU', options);

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

export const formatNowDateTimestamp = (timestamp: number): JSX.Element => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };

    const formattedDate = new Date(timestamp * 1000).toLocaleString('ru-RU', options);

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

export const getCurrentTime = (): string => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};