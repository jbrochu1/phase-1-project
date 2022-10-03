const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ece862459msh64649fba245c777p1c28dajsnb28c77bbfa56',
		'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
	}
};

fetch('https://sportspage-feeds.p.rapidapi.com/games?odds=spread', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));