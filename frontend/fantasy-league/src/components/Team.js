import { useEffect, useState } from "react"
import PlayerCard from "./PlayerCard"
import TeamSearch from "./TeamSearch"

const Team = ({users,playersList,removePlayer,addPlayer,data, createPlayer,backendPlayers}) => {

  // const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

  // const teamComponents = users.map(user => {
  //   return user.players.map(player => (
  //     <li>{player.name} <img src={player.url}></img> </li>
  // ))
  // })
  let keepersList = users[0].players.filter(player => player.position === 1)
  let defendersList = users[0].players.filter(player => player.position === 2)
  let midfieldersList = users[0].players.filter(player => player.position === 3)
  let strikersList = users[0].players.filter(player => player.position === 4)

  const checkIfEmpty = (list) => {
    if (list === undefined || list.length == 0) {
      return(
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height={200}></img>
      )
    } 
  }

  const checkIfEmptyMid = (list) => {
    if (list === undefined || list.length === 0 || list.length === 1) {
      return(
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height={200}></img>
      )
    } 
  }

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
  
  return(
    <>
    {/* {userComponents} */}
    {/* <div id="player-list">
      {teamComponents}
    </div> */}
    <div id="team-display">
      <div id="placeholder">{checkIfEmpty(keepersList)}</div>
      <div id="keepers">{keepersComponent}</div>
      <div id="placeholder">{checkIfEmpty(defendersList)}</div>
      <div id="defenders">{defendersComponent}</div>
      <div id="placeholder-mid">{checkIfEmptyMid(midfieldersList)}</div>
      <div id="midfielders">{midfieldersComponent}</div>
      <div id="placeholder">{checkIfEmpty(strikersList)}</div>
      <div id="strikers">{strikersComponent}</div>
    </div>

    <TeamSearch 
    data ={data}
    addPlayer = {addPlayer}
    createPlayer = {createPlayer}
    backendPlayers ={backendPlayers}
    />
    </>
  )


}


export default Team;