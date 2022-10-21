import React from 'react'

export default function Fixtures({fixtures, data, teamNames}) {
  
  


  
  const fixturesList = fixtures.map((fixture)=>{
    if (fixture.event === 12){
      return(
        <div key={fixture.id} className='fixture_card'>
        <h3 >{teamNames[fixture.team_h]} Vs {teamNames[fixture.team_a]}</h3>
        {fixture.finished ?  <p>{fixture.team_h_score}:{fixture.team_a_score}</p> : <p>Kick Off time: {fixture.kickoff_time}</p>}
        </div>
        )
    }
   
  })

  // const goalsScored = fixtures.map((fixture)=>{
  //   if (fixture.stats !== [] && fixture.stats[0].a !== []){
  //     fixture.stats[0].a.map((scored)=>{
  //       return (
  //         <p>{scored.element},{scored.value}</p>
  //       )
  //     })
  //   }
  // })

  const upcomingGames = fixtures.filter((fixture)=>fixture.event === 12)
  // const awayGoalsScored = upcomingGames.map(fixture=>{
  //   if(fixture.stats.length !== 0 && fixture.stats[0].a.length !== 0){
  //   } 
    
  // })

  

  return (
    <div className='fixtures_component'>
      {fixturesList}
    </div>

  )
}
