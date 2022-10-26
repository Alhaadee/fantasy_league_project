import { useEffect, useState } from "react"
import PlayerCard from "./PlayerCard"
import TeamSearch from "./TeamSearch"

const Team = ({users,playersList,removePlayer,findTrueUser ,data ,trueUser, createPlayer,backendPlayers,fetchPlayers,alert}) => {



  let keepersList = trueUser.players.filter(player => player.position === 1)
  let defendersList = trueUser.players.filter(player => player.position === 2)
  let midfieldersList = trueUser.players.filter(player => player.position === 3)
  let strikersList = trueUser.players.filter(player => player.position === 4)

  console.log(trueUser);

  const keepersComponent = 
    keepersList.map(keeper => (
      <PlayerCard userplayer={keeper} playersList={playersList} removePlayer={removePlayer} key={keeper.id}/>
    ))

  const defendersComponent =
    defendersList.map(defender => (
      <PlayerCard userplayer={defender} playersList={playersList} removePlayer={removePlayer} key={defender.id}/>
    ))

  const midfieldersComponent =
  midfieldersList.map(midfielder => (
    <PlayerCard userplayer={midfielder} playersList={playersList} removePlayer={removePlayer} key={midfielder.id}/>
  ))

  const strikersComponent =
  strikersList.map(striker => (
    <PlayerCard userplayer={striker} playersList={playersList} removePlayer={removePlayer} key={striker.id}/>
  ))
  

  const teamComponents = users.map(user => {
    return user.players.map(player => (
      <PlayerCard userplayer={player} playersList={playersList} removePlayer={removePlayer} users={users}/>
  ))
  }) 

  // const overallScore = users[0].players.map(player => {
  //   let count = 0;
  //   count += player.overallScore
  //   console.log(count)
  //   return count;
  // })

  

  let transCount = 0;
  const transferbudget = trueUser.players.map(player => {
    transCount += player.transferValue 
    // console.log(transCount);
  })

  let gwScoreCount = 0;
  const gwScore = trueUser.players.map(player => {
    let found = data.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
    
    gwScoreCount += found.event_points
  })

  let ScoreCount = 0;
  const overallScore = trueUser.players.map(player => {
    let found = data.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
    
    ScoreCount += found.total_points
  })



  // let t2 = 0;
  // const transferbudget2 = 

  return(
    <>
    <div id="user-display">
      <h3>{trueUser.userName}</h3>
      <h3>{trueUser.teamName}</h3>
      <h3>{trueUser.totalPoints}</h3>
      <h3>{trueUser.gameWeekPoints}</h3>
    
    </div>
    

    <div id="team-display">
      <div id="keepers">{keepersComponent}</div>
      <div id="defenders">{defendersComponent}</div>
      <div id="midfielders">{midfieldersComponent}</div>
      <div id="strikers">{strikersComponent}</div>
    </div>

    <div>
      <h3> Transfer budget: </h3>
      {100 - transCount}

      <h3> Points this game week: </h3>
      {gwScoreCount}

      <h3> Total Points: </h3>
      {ScoreCount}

    </div>

    <TeamSearch 
    data ={data}
    
    createPlayer = {createPlayer}
    backendPlayers ={backendPlayers}
    fetchPlayers = {fetchPlayers}
    users = {users}
    alert = {alert}
    trueUser = {trueUser}
    findTrueUser = {findTrueUser}
    />
    </>
  )


}


export default Team;