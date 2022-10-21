

import "./Stats.css"

const Stats = ({ data }) => {

  const teamNames = {
    1: "Arsenal",
    2: "Aston Villa",
    3: "Bournemouth",
    4: "Brentford",
    5: "Brighton",
    6: "Chelsea",
    7: "Crystal Palace",
    8: "Everton",
    9: "Fulham",
    10: "Leicester",
    11: "Leeds",
    12: "Liverpool",
    13: "Man City",
    14: "Man Utd",
    15: "Newcastle",
    16: "Nottingham Forest",
    17: "Southampton",
    18: "Tottenham Hotspurs",
    19: "West Ham",
    20: "Wolverhampton"
  }




  let top20Scorers = data.elements.sort((a, b) => b.goals_scored - a.goals_scored);
  top20Scorers.splice(20)

  const topScorers = top20Scorers.map((player, key) => {
    return (
      <tr key={key}>
        <td>{player.first_name} {player.second_name}</td>
        <td>{teamNames[player.team]}</td>
        <td>{player.goals_scored}</td>

      </tr>
    )
  })

  let top20Assisters = data.elements.sort((c, d) => d.assists - c.assists);
  top20Assisters.splice(20)

  const topAssisters = top20Assisters.map((player, key) => {
    return (
      <tr key={key}>
        <td>{player.first_name} {player.second_name}</td>
        <td>{teamNames[player.team]}</td>
        <td>{player.assists}</td>

      </tr>
    )
  })


  let top20keepers = data.elements.sort((e, f) => f.saves - e.saves);
  top20keepers.splice(20)

  const topKeepers = top20keepers.map((player, key) => {
    
    return (
       
          <tr key={key}>
            <td>{player.first_name} {player.second_name}</td>
            <td>{teamNames[player.team]}</td>
            <td>{player.saves}</td>

          </tr>
         
        
          
        )
    })


return (


  <div className="stat_table">
    <h3>Top Scorers</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Team</th>
        <th>Goals scored</th>
      </tr>
      {topScorers}
    </table>

    <h3>Top Assisters</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Team</th>
        <th>Assists</th>

      </tr>
      {topAssisters}
    </table>

    <table>
      <tr>
        <th>Name</th>
        <th>Team</th>
        <th>Saves</th>

      </tr>
      {topKeepers}
    </table>


  </div>
);
    
    

}

export default Stats;