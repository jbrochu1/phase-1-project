const schedule = document.getElementById('schedule');
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
        response.results.forEach(finalGame => {currentTeams(finalGame)})
   })

        // details.innerHTML = JSON.stringify(response);

    const currentTeams = (finalGame) => {
        const teams = document.createElement("div");
        teams.innerHTML = finalGame.teams.away.team + ' @ ' + finalGame.teams.home.team;
        schedule.append(teams);

    teams.addEventListener('click', () => {
        console.log(finalGame);
        gameDetails(finalGame);

        })
    }


    const gameItem = (finalGame) => {
            // document.body.append(element);
            //console.log(gameDetails(finalGame));
            console.log(finalGame);

            const details = document.createElement("div");
            details.innerHTML = finalGame.details.seasonType;
            document.body.append(details);

            const odds = document.createElement("div");
            odds.innerHTML = finalGame.odds[0].spread.current.awayOdds + ' ' + finalGame.odds[0].spread.current.homeOdds;
            document.body.append(odds);

            const venue = document.createElement("div");
            venue.innerHTML = finalGame.venue.name;
            document.body.append(venue);

            const gameTime = document.createElement("div");
            gameTime.innerHTML = finalGame.schedule.date;
            let todaysGame = new Date(finalGame.schedule.date);
            //console.log(finalGame.schedule.date, todaysGame);
            gameTime.innerHTML = todaysGame.toLocaleDateString('en-EN') + ' ' + todaysGame.toLocaleTimeString('en-EN');
            document.body.append(gameTime);

            const gameStatus = document.createElement("div");
            gameStatus.innerHTML = finalGame.status;
            document.body.append(gameStatus);

            if (finalGame.scoreboard) {
                const currentScore = document.createElement("div");
                currentScore.innerHTML = finalGame.scoreboard.score.away + ' - ' + finalGame.scoreboard.score.home;
                document.body.append(currentScore);

            }
        }



        const gameDetails = (finalGame) => {
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



    // .catch(err => console.error(err));