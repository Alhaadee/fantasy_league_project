import React from 'react'

export default function Team({users}) {

  const user = users.map((user) => {
    return user.players.map((player) => <p>{player.name}</p>)
    
  })

 
  
  
  return (
    user

 


  )
}