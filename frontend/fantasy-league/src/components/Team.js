import { useState } from "react"
import PlayerCard from "./PlayerCard"

const Team = ({users,playersList,removePlayer}) => {

  const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

  // const teamComponents = users.map(user => {
  //   return user.players.map(player => (
  //     <li>{player.name} <img src={player.url}></img> </li>
  // ))
  // })

  const teamComponents = users.map(user => {
    return user.players.map(player => (
      <PlayerCard userplayer={player} playersList={playersList} removePlayer={removePlayer} users={users}/>
  ))
  })


  return(
    <>
    {userComponents}
    <div id="player-list">
      {teamComponents}
    </div>
    </>
  )


}


export default Team;