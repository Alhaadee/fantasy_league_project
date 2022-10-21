import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Fixtures from "../components/Fixtures";
import LeaderBoard from "../components/LeaderBoard";
import Stats from "../components/Stats";
import Team from "../components/Team";
import fixturesData from "../fixtures.json"

const HomeContainer = () => {

    const [fixtures,setFixtures] = useState([])
    // contains gameweeks, teams, players
    const [footballData, setFootballData] = useState([])
    const [loading,setLoading] = useState(true)
    

    const fetchFixtures = async () => {
        const response = await fetch("http://localhost:8080/data/fixtures"
        // ,{
        //     headers: {
        //         "Content-Type":"application/json"
        //     }
        // }
        )
        const FixturesData = await response.json()
        setFixtures(FixturesData)

    }

    const fetchFootballData = async()=> {
        const response = await fetch("http://localhost:8080/data/players")
        const footballStats = await response.json()
        setFootballData(footballStats)
        setLoading(false)
    }

    useEffect(()=>{
        fetchFixtures()
        fetchFootballData()
        
    },[])


    useEffect(()=>{
        if(!loading){
            createPlayersObj()
        }
    },[loading])
    


    const createPlayersObj = () => {
        const playerNames = {}
        if(!loading){
        footballData.elements.forEach(player => {
            playerNames[player.id] = `${player.first_name} ${player.second_name}`
        });
        console.log(playerNames);
        return playerNames
        }
    }

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

    return (
            <BrowserRouter>
            <header>
                <h1>Bright Fantasy League</h1>
                <nav>
                    <h3><Link to="/">Fixtures</Link></h3>
                    <h3><Link to="/team">Team</Link></h3>
                    <h3><Link to="/stats">Stats</Link></h3>
                    <h3><Link to="/leaderBoard">LeaderBoard</Link></h3>
                </nav>
            </header>

                <Routes> 
                    <Route path="/" element= {
                    <Fixtures fixtures={fixtures} data={footballData} teamNames={teamNames}/>
                    }/>
                    <Route path="/team" element= {
                    <Team/>
                    }/>
                    <Route path="/leaderboard" element= {
                    <LeaderBoard/>
                    }/>
                     <Route path="/stats" element= {
                    <Stats/>
                    }/>
                    
                </Routes>

            </BrowserRouter>

    )
}

export default HomeContainer;