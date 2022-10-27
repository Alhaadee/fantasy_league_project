import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Pages from './Pages'

export default function Fixtures({fixtures, data, teamNames, playerNames, loading}) {
  
  

  const normalGoalIndex = 0
  const ownGoalIndex = 2
  const [selectedWeek, setSelectedWeek] = useState(3)
  

  useEffect(()=>{
    if(!loading){
      const currentWeek =  data.events.findIndex((event)=>{ return event.finished === false }) + 1 
      setSelectedWeek(currentWeek)
    }
},[loading])

 

const awayGoalsScored = (fixture,goalType) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[goalType].a.length !== 0){
    return(
    fixture.stats[goalType].a.map((playerScored,index) => {
      if(goalType === normalGoalIndex){
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}</li>)
    } else {     
       return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}(OG)</li>)
    }
    }))
  }
}

const homeGoalsScored = (fixture,goalType) => {
  if(!loading && fixture.stats.length !== 0 && fixture.stats[goalType].h.length !== 0){
    return(
    fixture.stats[goalType].h.map((playerScored,index) => {
      if(goalType === normalGoalIndex){
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]} : {playerScored.value}</li>)
    } else{
      return (<li key={fixture.id+index}>{playerNames[playerScored.element]}: {playerScored.value}(OG)</li>)

    }
    }))
  }
}
const displayScoreboard = (fixture) => {
  if(fixtures.started & !fixture.finished){
    return <p>{fixture.team_h_score}:{fixture.team_a_score} (LIVE)</p>
  } else if (fixture.finished){
    return <p>{fixture.team_h_score}:{fixture.team_a_score}</p>
  } else {
    const date = fixture.kickoff_time.split("T")
    return(
    <div>
    <p className='kickoff'>Kick Off time</p>
    <p>{date[0]}</p>
    <p>{date[1].slice(0,-1)}</p>
    </div>
    )
  }
}
  const teamLogo = "https://resources.premierleague.com/premierleague/badges/70/t"
  // ${fixture.team_h}
  // .png
  // <img src={teamLogo + fixture.team_h + ".png"}></img>
  
  const getHomeTeamURL = (fixture) => {
    let targetTeam = data.teams.find(team => team.id === fixture.team_h)
    let teamLogo = "https://resources.premierleague.com/premierleague/badges/70/t" + targetTeam.code + ".png"
    return teamLogo
  }

  const getAwayTeamURL = (fixture) => {
    let targetTeam = data.teams.find(team => team.id === fixture.team_a)
    let teamLogo = "https://resources.premierleague.com/premierleague/badges/70/t" + targetTeam.code + ".png"
    return teamLogo
  }
  
  const fixturesList = fixtures.map((fixture)=>{
    if (fixture.event === selectedWeek){
      return(
        <div key={fixture.id} className='fixture_card'>
          <h3 ><img src={getHomeTeamURL(fixture)}></img>{teamNames[fixture.team_h]} Vs {teamNames[fixture.team_a]} <img src={getAwayTeamURL(fixture)}></img></h3>
          {displayScoreboard(fixture)}
          <div className='players-scored'>
            <ul className='left'>
              {homeGoalsScored(fixture,normalGoalIndex)}
              {awayGoalsScored(fixture,ownGoalIndex)}

            </ul>
            <ul className='right'>
              {awayGoalsScored(fixture,normalGoalIndex)}
              {homeGoalsScored(fixture,ownGoalIndex)}

            </ul>
          </div>
        </div>
        )
    }
   
  })

  const handlePageClick = ({selected : selectedPage}) => {
    setSelectedWeek(selectedPage+1)  
}


  return (
    <>
     {!loading ?   <ReactPaginate 
        previousLabel = {"<- Previous"}
        nextLabel = {"next ->"}
        pageCount = {38}
        initialPage = {12}
        onPageChange ={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}

    /> : <></>}
    <h2>Game Week {selectedWeek}</h2>
    <div className='fixtures_list'>
        {fixturesList}
    </div>
   
  
    </>

  )
}
