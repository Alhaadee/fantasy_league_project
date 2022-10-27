

const PlayerInfo = ({searchedPlayer, data, users, backendPlayers,createPlayer, teamNames, findTrueUser, trueUser, transCount}) => {

    const trueUserNames = trueUser.players.map(player => player.name)
    const trueUserBudget = trueUser.transferBudget

    const handleClick =  (e) => {
        // console.log(e.target.textContent);
        // let copiedplayer = {...selectedPlayer}
        let copiedplayer = (data.elements.find((player) => player.web_name === searchedPlayer.web_name))
        // await setSelectedPlayers(copiedplayer)
        console.log(copiedplayer)
        if (trueUser.players.length === 11) {
            alert("You've already got a full team")
            
        } else if (trueUserNames.includes(copiedplayer.web_name)) {
            alert("You already have that player")
        } else if (100 - transCount < copiedplayer.now_cost/10){
            alert("You don't have enough money!")
        }
        else{
            findTrueUser();
            createPlayer({
                name: copiedplayer.web_name,
                transferValue: copiedplayer.now_cost,
                apiid: copiedplayer.id,
                position: copiedplayer.element_type
            },trueUser)
        }
    }
   
    const imgURL = `https://resources.premierleague.com/premierleague/photos/players/110x140/p${searchedPlayer.code}.png`;
    

    return(
        <div id="player-info">
            <h4>{searchedPlayer.first_name} {searchedPlayer.second_name}</h4>
            
                <img src={imgURL}></img>
                Team: {teamNames[searchedPlayer.team]} <br></br>
                Cost: {searchedPlayer.now_cost/10} <br></br>
                Current form: {searchedPlayer.form} <br></br>
                Points this game week: {searchedPlayer.event_points} <br></br>
                Total points: {searchedPlayer.total_points} <br></br>
                Goals scored: {searchedPlayer.goals_scored} <br></br>
                Total Assists: {searchedPlayer.assists} <br></br>
                Total Saves: {searchedPlayer.saves} <br></br>
                Clean Sheets: {searchedPlayer.clean_sheets} <br></br>

            
            <button id="add-button" onClick={handleClick}>Add to team!</button>
        </div>
    )
}

export default PlayerInfo;