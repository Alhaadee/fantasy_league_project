import React from 'react'

export default function Fixtures({fixtures, data, teamNames, playerNames, loading}) {
  
  

  const normalGoalIndex = 0
  const ownGoalIndex = 2

const awayGoalsScored = (fixture,goalType) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[goalType].a.length !== 0){
    return(
    fixture.stats[goalType].a.map((playerScored,index) => {
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}</li>)
    })
    )
  }
}

const homeGoalsScored = (fixture,goalType) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[goalType].h.length !== 0){
    return(
    fixture.stats[goalType].h.map((playerScored,index) => {
      if(goalType === 0){
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}</li>)
    } else{
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]}(OG): {playerScored.value}</li>)

    }
    }))
  }
}
//  if goal type =  2...
const displayScoreboard = (fixture) => {
  if(fixtures.started & !fixture.finished){
    return <p>{fixture.team_h_score}:{fixture.team_a_score} (LIVE)</p>
  } else if (fixture.finished){
    return <p>{fixture.team_h_score}:{fixture.team_a_score}</p>
  } else {
    return <p>Kick Off time: {fixture.kickoff_time}</p>
  }
}


 
  
  const fixturesList = fixtures.map((fixture)=>{
    if (fixture.event === 12){
      return(
        <div key={fixture.id} className='fixture_card'>
          <h3 >{teamNames[fixture.team_h]} Vs {teamNames[fixture.team_a]}</h3>
          {displayScoreboard(fixture)}
          <div className='players-scored'>
            <ul className='left'>
              {homeGoalsScored(fixture,normalGoalIndex)}
              {homeGoalsScored(fixture,ownGoalIndex)}
            </ul>
            <ul className='right'>
              {awayGoalsScored(fixture,normalGoalIndex)}
              {awayGoalsScored(fixture,ownGoalIndex)}
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
