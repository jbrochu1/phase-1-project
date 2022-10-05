const scheduleBar = document.getElementById('schedule-bar');
const detailBar = document.getElementById('detail-bar');
const watchButton = document.querySelector('#watchButton');
const clearButton = document.querySelector('#clearButton');
const watchBar = document.querySelector('#watchBar');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6ece862459msh64649fba245c777p1c28dajsnb28c77bbfa56',
        'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
    }
};

fetch('https://sportspage-feeds.p.rapidapi.com/games?odds=spread&league=MLB', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        response.results.forEach(finalGame => { currentTeams(finalGame) })
    })

// details.innerHTML = JSON.stringify(response);

const currentTeams = (finalGame) => {
    const teams = document.createElement("p");
    teams.innerHTML = finalGame.teams.away.team + ' @ ' + finalGame.teams.home.team;
    scheduleBar.append(teams);

    teams.addEventListener('click', () => {
        console.log(finalGame);
        renderDetails(finalGame);

    })
}

const renderDetails = (finalGame) => {
    //const element = document.createElement("div");
    //console.log(gameDetails(finalGame));
    console.log(finalGame);
    const details = document.querySelector('#details');
    details.innerHTML = finalGame.details.seasonType;
    const odds = document.querySelector('#odds');
    odds.innerHTML = finalGame.odds[0].spread.current.awayOdds + ' ' + finalGame.odds[0].spread.current.homeOdds;
    const teams = document.querySelector('#teams');
    teams.innerHTML = finalGame.teams.away.team + ' @ ' + finalGame.teams.home.team;
    const venue = document.querySelector('#venue');
    venue.innerHTML = finalGame.venue.name;
    const gameTime = document.querySelector('#schedule');
    gameTime.innerHTML = finalGame.schedule.date;
    let todaysGame = new Date(finalGame.schedule.date);
    //console.log(finalGame.schedule.date, todaysGame);
    gameTime.innerHTML = todaysGame.toLocaleDateString('en-EN') + ' ' + todaysGame.toLocaleTimeString('en-EN');
    const gameStatus = document.querySelector('#status');
    gameStatus.innerHTML = finalGame.status;

    if (finalGame.scoreboard) {
        const currentScore = document.querySelector('#score');
        currentScore.innerHTML = finalGame.scoreboard.score.away + ' - ' + finalGame.scoreboard.score.home;

    }

}
watchButton.addEventListener('click', () => {
    let p = document.createElement("p");
    p.textContent = teams.innerHTML;
    watchBar.append(p);
})

clearButton.addEventListener('click', () => {
    watchBar.textContent = "";    
})


    // .catch(err => console.error(err));