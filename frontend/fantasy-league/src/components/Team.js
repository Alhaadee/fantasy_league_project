import { useEffect, useState } from "react"
import PlayerCard from "./PlayerCard"
import TeamSearch from "./TeamSearch"

const Team = ({users,playersList,removePlayer,addPlayer,data, createPlayer}) => {

  // const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

  // const teamComponents = users.map(user => {
  //   return user.players.map(player => (
  //     <li>{player.name} <img src={player.url}></img> </li>
  // ))
  // })
  let keepersList = users[0].players.filter(player => player.position === "Goalkeeper")
  let defendersList = users[0].players.filter(player => player.position === "Defender")
  let midfieldersList = users[0].players.filter(player => player.position === "Midfielder")
  let strikersList = users[0].players.filter(player => player.position === "Striker")

  const keepersComponent = 
    keepersList.map(keeper => (
      <PlayerCard userplayer={keeper} playersList={playersList} removePlayer={removePlayer}/>
    ))

  const defendersComponent =
    defendersList.map(defender => (
      <PlayerCard userplayer={defender} playersList={playersList} removePlayer={removePlayer}/>
    ))

  const midfieldersComponent =
  midfieldersList.map(midfielder => (
    <PlayerCard userplayer={midfielder} playersList={playersList} removePlayer={removePlayer}/>
  ))

  const strikersComponent =
  strikersList.map(striker => (
    <PlayerCard userplayer={striker} playersList={playersList} removePlayer={removePlayer}/>
  ))
  

  const teamComponents = users.map(user => {
    return user.players.map(player => (
      <PlayerCard userplayer={player} playersList={playersList} removePlayer={removePlayer} users={users}/>
  ))
  }) 

  // const handleClick = () => {
  //   addPlayer(player);
  
  // }

  return(
    <>
    {/* {userComponents} */}
    {/* <div id="player-list">
      {teamComponents}
    </div> */}
    <div id="team-display">
      <div id="keepers">{keepersComponent}</div>
      <div id="defenders">{defendersComponent}</div>
      <div id="midfielders">{midfieldersComponent}</div>
      <div id="strikers">{strikersComponent}</div>
    </div>

    <TeamSearch 
    data ={data}
    addPlayer = {addPlayer}
    createPlayer = {createPlayer}
    />
    </>
  )


}


export default Team;