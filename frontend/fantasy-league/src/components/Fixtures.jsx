import React from 'react'

export default function Fixtures({fixtures, data, teamNames, playerNames, loading}) {
  
  


  // const upcomingGames = fixtures.filter((fixture)=>fixture.event === 12)
  // const homeGoalsScored = upcomingGames.map(fixture=>{
  //   if(!loading && fixture.stats.length !== 0 && fixture.stats[0].h.length !== 0){
  //     return(
  //     fixture.stats[0].h.map(playerScored => {
  //       return (<p>{playerNames[playerScored.element]} : {playerScored.value}</p>)
  //     })
  //     )
  //   } 
    
  // })

const homeGoalsScored = (fixture) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[0].h.length !== 0){
    return(
    fixture.stats[0].h.map((playerScored,index) => {
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}</li>)
    })
    )
  }
}
const homeOwnGoals = (fixture) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[2].h.length !== 0){
    return(
    fixture.stats[2].h.map((playerScored,index) => {
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}(OG)</li>)
    })
    )
  }
}

const awayOwnGoals = (fixture) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[2].a.length !== 0){
    return(
    fixture.stats[2].a.map((playerScored,index) => {
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}(OG)</li>)
    })
    )
  }
}

const awayGoalsScored = (fixture) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[0].a.length !== 0){
    return(
    fixture.stats[0].a.map((playerScored,index) => {
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}</li>)
    })
    )
  }
}


 
  
  const fixturesList = fixtures.map((fixture)=>{
    if (fixture.event === 12){
      return(
        <div key={fixture.id} className='fixture_card'>
        <h3 >{teamNames[fixture.team_h]} Vs {teamNames[fixture.team_a]}</h3>
        {fixture.finished ?  <p>{fixture.team_h_score}:{fixture.team_a_score}</p> : <p>Kick Off time: {fixture.kickoff_time}</p>}
        <div className='players-scored'>
        <ul className='left'>
        {homeGoalsScored(fixture)}
        {awayOwnGoals(fixture)}
        </ul>
        <ul className='right'>
        {awayGoalsScored(fixture)}
        {homeOwnGoals(fixture)}
        </ul>
        </div>
       
       
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
