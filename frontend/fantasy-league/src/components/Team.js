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


  return(
    <>
    <div id="user-display">
      <h3>{users[0].userName}</h3>
      <h3>{users[0].teamName}</h3>
      <h3>{users[0].totalPoints}</h3>
      <h3>{users[0].gameWeekPoints}</h3>
    
    </div>
    

    <div id="team-display">
      <div id="keepers">{keepersComponent}</div>
      <div id="defenders">{defendersComponent}</div>
      <div id="midfielders">{midfieldersComponent}</div>
      <div id="strikers">{strikersComponent}</div>
    </div>

    <TeamSearch 
    data ={data}
    addPlayerToUser = {addPlayerToUser}
    createPlayer = {createPlayer}
    backendPlayers ={backendPlayers}
    fetchPlayers = {fetchPlayers}
    users = {users}
    alert = {alert}
    />
    </>
  )


}


export default Team;