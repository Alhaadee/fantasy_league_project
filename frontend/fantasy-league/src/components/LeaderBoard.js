import React from 'react'

export default function LeaderBoard({users,data}) {





  const userGWScore = (user)=> { 
    let scoreTotal = 0
    user.players.map(player => {
      let found = data.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
      console.log(found.total_points)
      scoreTotal += found.event_points
      
    }
    )
    return scoreTotal;
  }

  

  
  const userOverallScore = (user)=> { 
    let scoreTotal = 0
    user.players.map(player => {
      let found = data.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
      console.log(found.total_points)
      scoreTotal += found.total_points
      
    }
    )
    return scoreTotal;
  }


  const leader = users.map((user,key) => {
    return (
      <tr key={key}>
        <td>{user.userName}</td>
        <td>{userGWScore(user)}</td>
        <td>{userOverallScore(user)}</td>
        


      </tr>

    )
  })
  
    return (
      <div>
      <table>
      <tr>
        <th>Name</th>
        <th>Game Week Score</th>
        <th>Overall Score</th>

      </tr>
      {leader}
    </table>
    </div>
    )
}

