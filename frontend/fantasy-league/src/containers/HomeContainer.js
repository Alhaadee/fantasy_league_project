import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Fixtures from "../components/Fixtures";
import LeaderBoard from "../components/LeaderBoard";
import Stats from "../components/Stats";
import Team from "../components/Team";

const HomeContainer = () => {

    const [fixtures,setFixtures] = useState([])
    // contains gameweeks, teams, players
    const [footballData, setFootballData] = useState([])
    const [users , setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [playerNames, setPlayerNames] = useState ({})
    

    const fetchFixtures = async () => {
        const response = await fetch("http://localhost:8080/data/fixtures")
        const FixturesData = await response.json()
        setFixtures(FixturesData)

    }

    const fetchFootballData = async()=> {
        const response = await fetch("http://localhost:8080/data/players")
        const footballStats = await response.json()
        setFootballData(footballStats)
        setLoading(false)
    }



    const fetchUsers = async()=> {
        const response = await fetch("http://localhost:8080/user")
        const JSONuser = await response.json()
        setUsers(JSONuser)
    }

    

    useEffect(()=>{
        fetchFixtures()
        fetchFootballData()
        fetchUsers()
    },[])
    
    useEffect(()=>{
        if(!loading){
            createPlayersObj()
        }
    },[loading])

    const createPlayersObj = () => {
        if(!loading){
        const playerNamesCopy = {...playerNames}
        footballData.elements.forEach(player => {
            playerNamesCopy[player.id] = `${player.first_name} ${player.second_name}`
        });
        setPlayerNames(playerNamesCopy)
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
                    <Fixtures fixtures={fixtures} data={footballData} teamNames={teamNames} playerNames={playerNames} loading={loading}/>
                    }/>
                    <Route path="/team" element= {
                    <Team users={users} playersList={footballData.elements}/>
                    }/>
                    <Route path="/leaderboard" element= {
                    <LeaderBoard users ={users}/>
                    }/>
                     <Route path="/stats" element= {
                    <Stats data = {footballData}/>
                    }/>
                    
                </Routes>

            </BrowserRouter>

    )
}

export default HomeContainer;