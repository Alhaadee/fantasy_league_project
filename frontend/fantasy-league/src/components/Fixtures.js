import React from 'react'

export default function Fixtures({fixtures}) {
  
  const teamNames = {
    1:"Arsenal",
    2:"Aston Villa",
    3:"Bournemouth",
    4:"Brentford",
    5:"Brighton",
    6:"Chelsea",
    7:"Crystal Palace",
    8:"Everton",
    9:"Fulham",
    10:"Leicester",
    11:"Leeds",
    12:"Liverpool",
    13:"Man City",
    14:"Man Utd",
    15:"Newcastle",
    16:"Nottingham Forest",
    17:"Southampton",
    18:"Tottenham Hotspurs",
    19:"West Ham",
    20:"Wolverhampton"
  }
  
  const fixturesList = fixtures.map((fixture)=>{
    if (fixture.event === 12){
      return(
        <div className='fixture_card'>
        <h3>{teamNames[fixture.team_h]} Vs {teamNames[fixture.team_a]}</h3>
        {fixture.finished ?  <p>{fixture.team_h_score}:{fixture.team_a_score}</p> : <p>Kick Off time: {fixture.kickoff_time}</p>}
        </div>
    
        )
    }
   
  })

  return (
    <div className='fixtures_component'>
      {fixturesList}
    </div>

  )
}
