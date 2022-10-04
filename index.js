
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ece862459msh64649fba245c777p1c28dajsnb28c77bbfa56',
		'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
	}
};

fetch('https://sportspage-feeds.p.rapidapi.com/games?odds=spread&league=MLB', options)
	.then(response => response.json())
	.then((response) => {
        const details = document.querySelector('#details')
        console.log(response);
        // details.innerHTML = JSON.stringify(response);
        details.innerHTML = response.results[0].details.conferenceGame;
        const odds = document.querySelector('#odds')
        odds.innerHTML = response.results[0].odds[0].spread.current.awayOdds + ' ' + response.results[0].odds[0].spread.current.homeOdds

    })
	.catch(err => console.error(err));

