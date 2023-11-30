export const getCities = async (city: string) => {
	const url =
		'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
	const token = '1933a6fff5150deb83cc3acc4e6da4545005a216';
	const query = city;

	try {
		const response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Token ' + token,
			},
			body: JSON.stringify({ query: query }),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Error fetching cities:', error);
		throw error;
	}
};

export const getCityByCords = async (lat: number, lon: number) => {
	const url =
		'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
	const token = '1933a6fff5150deb83cc3acc4e6da4545005a216';
	const query = { lat: lat, lon: lon };

  try {
		const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
      },
      body: JSON.stringify(query)
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Error fetching location:', error);
		throw error;
	}
};
