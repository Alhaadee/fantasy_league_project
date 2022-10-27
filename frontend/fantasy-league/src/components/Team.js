import { useEffect, useState } from "react"
import PlayerCard from "./PlayerCard"
import TeamSearch from "./TeamSearch"

const Team = ({users,playersList,removePlayer,findTrueUser ,data ,trueUser, 
  createPlayer,backendPlayers,fetchPlayers,alert, teamNames, userGWScore, userOverallScore}) => {


  let keepersList = trueUser.players.filter(player => player.position === 1)
  let defendersList = trueUser.players.filter(player => player.position === 2)
  let midfieldersList = trueUser.players.filter(player => player.position === 3)
  let strikersList = trueUser.players.filter(player => player.position === 4)

  console.log(trueUser);

  const keepersComponent = 
    keepersList.map(keeper => (
      <PlayerCard userplayer={keeper} playersList={playersList} removePlayer={removePlayer} key={keeper.id} trueUser={trueUser} findTrueUser={findTrueUser}/>
    ))

  const defendersComponent =
    defendersList.map(defender => (
      <PlayerCard userplayer={defender} playersList={playersList} removePlayer={removePlayer} key={defender.id} trueUser={trueUser} findTrueUser={findTrueUser}/>
    ))

  const midfieldersComponent =
  midfieldersList.map(midfielder => (
    <PlayerCard userplayer={midfielder} playersList={playersList} removePlayer={removePlayer} key={midfielder.id} trueUser={trueUser} findTrueUser={findTrueUser}/>
  ))

  const strikersComponent =
  strikersList.map(striker => (
    <PlayerCard userplayer={striker} playersList={playersList} removePlayer={removePlayer} key={striker.id} trueUser={trueUser} findTrueUser={findTrueUser}/>
  ))
  

  const teamComponents = users.map(user => {
    return user.players.map(player => (
      <PlayerCard userplayer={player} playersList={playersList} removePlayer={removePlayer} users={users} trueUser={trueUser} findTrueUser={findTrueUser}/>
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
    transCount += player.transferValue/10 
    
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
    <section class = "team-section">
    <div id="user-display">
      <h3>{trueUser.userName}</h3>
      <h3> Transfer budget: </h3>
      {(100 -transCount).toFixed(1)}
      <h3>Total Points: {userGWScore(trueUser)}</h3>
      <h3>Gameweek Points: {userOverallScore(trueUser)}</h3>
    
    </div>


  
    
    <div class = "team-view">
      <div id="team-display">
        <h3>{trueUser.teamName}</h3>
        <div id="keepers">{keepersComponent}</div>
        <div id="defenders">{defendersComponent}</div>
        <div id="midfielders">{midfieldersComponent}</div>
        <div id="strikers">{strikersComponent}</div>
      </div>

      <div id="right-section">
      <TeamSearch 
      data ={data}
      
      createPlayer = {createPlayer}
      backendPlayers ={backendPlayers}
      fetchPlayers = {fetchPlayers}
      users = {users}
      alert = {alert}
      teamNames = {teamNames}
      trueUser = {trueUser}
      findTrueUser = {findTrueUser}
      transCount={transCount}
      />
      </div>
    </div>
    </section>
  )


}


export default Team;