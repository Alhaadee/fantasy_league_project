import { useEffect, useState } from "react"
import PlayerCard from "./PlayerCard"
import TeamSearch from "./TeamSearch"

const Team = ({users,playersList,removePlayer,addPlayerToUser,data, createPlayer,backendPlayers,fetchPlayers,alert}) => {



  let keepersList = users[0].players.filter(player => player.position === 1)
  let defendersList = users[0].players.filter(player => player.position === 2)
  let midfieldersList = users[0].players.filter(player => player.position === 3)
  let strikersList = users[0].players.filter(player => player.position === 4)

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

  console.log(users[0].overallScore)

  let transCount = 0;
  const transferbudget = users[0].players.map(player => {
    transCount += player.transferValue 
    // console.log(transCount);
  })

  let gwScoreCount = 0;
  const gwScore = users[0].players.map(player => {
    let found = data.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
    console.log(found.event_points)
    gwScoreCount += found.event_points
  })

  let ScoreCount = 0;
  const overallScore = users[0].players.map(player => {
    let found = data.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
    console.log(found.total_points)
    ScoreCount += found.total_points
  })



  // let t2 = 0;
  // const transferbudget2 = 

  return(
    <section class = "team-section">
    <div id="user-display">
      <h3>{users[0].userName}</h3>
      <h3>{users[0].teamName}</h3>
      <h3> Transfer budget: </h3>
      {100 - transCount}
      <h3> Points this game week: </h3>
      {gwScoreCount}
      <h3> Total Points: </h3>
      {ScoreCount}
    </div>
    
    <div class = "team-view">
    <div id="team-display">
      <h3>Current Team</h3>
      <div id="keepers">{keepersComponent}</div>
      <div id="defenders">{defendersComponent}</div>
      <div id="midfielders">{midfieldersComponent}</div>
      <div id="strikers">{strikersComponent}</div>
    </div>

    <div id="right-section">
    <TeamSearch 
    data ={data}
    addPlayerToUser = {addPlayerToUser}
    createPlayer = {createPlayer}
    backendPlayers ={backendPlayers}
    fetchPlayers = {fetchPlayers}
    users = {users}
    alert = {alert}
    />
    </div>
    </div>
    </section>
  )


}


export default Team;