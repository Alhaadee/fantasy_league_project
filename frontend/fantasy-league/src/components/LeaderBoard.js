import React from 'react'

export default function LeaderBoard({users,data}) {



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

  const leader = users.map((user,key) => {
    return (
      <tr key={key}>
        <td>{user.userName}</td>
        <td>{gwScoreCount}</td>
        <td>{ScoreCount}</td>
        


      </tr>

    )
  })
  
    return (
      <div id='leaderboard'>
        <h3>Current League Standings</h3>
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

