

const PlayerInfo = ({searchedPlayer, data, users, backendPlayers,createPlayer, teamNames}) => {

    const backendPlayersNames = backendPlayers.map(player => player.name)

    const handleClick =  (e) => {
        // console.log(e.target.textContent);
        // let copiedplayer = {...selectedPlayer}
        let copiedplayer = (data.elements.find((player) => player.web_name === searchedPlayer.web_name))
        // await setSelectedPlayers(copiedplayer)
        console.log(copiedplayer)
        if (users[0].players.length === 11) {
            alert("You've already got a full team")
            
        } else if (backendPlayersNames.includes(copiedplayer.web_name)) {
            alert("You already have that player")
        } else{
            createPlayer({
                name: copiedplayer.web_name,
                transferValue: copiedplayer.now_cost,
                apiid: copiedplayer.id,
                position: copiedplayer.element_type
            })
        }
    }
   
    const imgURL = `https://resources.premierleague.com/premierleague/photos/players/110x140/p${searchedPlayer.code}.png`;
    

    return(
        <div id="player-info">
            <h4>{searchedPlayer.first_name} {searchedPlayer.second_name}</h4>
            <ul>
                <img src={imgURL}></img>
                <li>Team: {teamNames[searchedPlayer.team]}</li>
                <li>Cost: {searchedPlayer.now_cost/10}</li>
                <li>Current form: {searchedPlayer.form}</li>
                <li>Points this game week: {searchedPlayer.event_points}</li>
                <li>Total points: {searchedPlayer.total_points}</li>
                <li>Goals scored: {searchedPlayer.goals_scored}</li>
                <li>Total Assists: {searchedPlayer.assists}</li>
                <li>Total Saves: {searchedPlayer.saves}</li>
                <li>Clean Sheets: {searchedPlayer.clean_sheets}</li>

            </ul>
            <button onClick={handleClick}>Add to team!</button>
        </div>
    )
}

export default PlayerInfo;