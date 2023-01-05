const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e3f1307demsh302b305be8f232ap17cf5fjsn44f153a6b509',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));