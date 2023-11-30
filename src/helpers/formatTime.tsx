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