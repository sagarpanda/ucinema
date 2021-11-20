async function fetchGoogleSheet() {
	const fetchUrl = `https://mock-serv.herokuapp.com/api/cinema`;
	const data = await fetch(fetchUrl).then((response) => {
		if (response.status === 200) {
			return response.json();
		} else {
			return { records: [] };
		}
	});
	return data.records;
}

export default fetchGoogleSheet;
