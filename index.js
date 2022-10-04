
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
        response.forEach
        const details = document.querySelector('#details')
        console.log(response);
        // details.innerHTML = JSON.stringify(response);
        details.innerHTML = response.results[0].details.seasonType;
        const odds = document.querySelector('#odds')
        odds.innerHTML = response.results[0].odds[0].spread.current.awayOdds + ' ' + response.results[0].odds[0].spread.current.homeOdds;
        const teams = document.querySelector('#teams')
        teams.innerHTML = response.results[0].teams.away.team + ' ' + response.results[0].teams.home.team;
        const venue = document.querySelector('#venue')
        venue.innerHTML = response.results[0].venue.name;
        const gameTime = document.querySelector('#schedule')
        gameTime.innerHTML = response.results[0].schedule.date;
        let todaysGame = new Date(response.results[0].schedule.date);
        //console.log(response.results[0].schedule.date, todaysGame);
        gameTime.innerHTML = todaysGame.toLocaleDateString('en-EN') + ' ' + todaysGame.toLocaleTimeString('en-EN');






        // const isoStr1 = gameTime;
        // const date1 = new Date(isoStr1);
        // console.log(date1);
        // const date2 = new Date(gameTime.slice(0, -1));
        // console.log(date2);


    })
	.catch(err => console.error(err));

