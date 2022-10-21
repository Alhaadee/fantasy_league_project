import React from 'react'

export default function LeaderBoard({users}) {

  const leader = users.map((user,key) => {
    return (
      <tr key={key}>
        <td>{user.userName}</td>
        <td>{user.gwscore}</td>
        <td>{user.overallScore}</td>


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

