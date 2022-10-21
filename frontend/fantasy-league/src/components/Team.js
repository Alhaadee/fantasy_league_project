import { useState } from "react"
import PlayerCard from "./PlayerCard"

const Team = ({users,APIplayers}) => {

  const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

  // const teamComponents = users.map(user => {
  //   return user.players.map(player => (
  //     <li>{player.name} <img src={player.url}></img> </li>
  // ))
  // })

  const teamComponents = users.map(user => {
    return user.players.map(player => (
      <PlayerCard userplayer={player} APIplayers={APIplayers}/>
  ))
  })


  return(
    <>
    {userComponents}
    {teamComponents}
    </>
  )


}


export default Team;