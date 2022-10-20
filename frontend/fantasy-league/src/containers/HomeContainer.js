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

    const fetchFixtures = async () => {
        const response = await fetch("https://fantasy.premierleague.com/api/fixtures/")
        const FixturesData = await response.json()
        setFixtures(FixturesData)

    }

    const fetchFootballData = async()=> {
        const response = await fetch("https://fantasy.premierleague.com/api/bootstrap-static/")
        const footballStats = await response.json()
        setFootballData(footballStats)
    }

    useEffect(()=>{
        fetchFixtures()
        fetchFootballData()
    },[])

    return (
            <BrowserRouter>
            <header>
                <h1>Bright Fantasy League</h1>
                <nav>
                    <h3><Link to="/fixtures">Fixtures</Link></h3>
                    <h3><Link to="/team">Team</Link></h3>
                    <h3><Link to="/stats">Stats</Link></h3>
                    <h3><Link to="/leaderBoard">LeaderBoard</Link></h3>
                </nav>
            </header>

                <Routes> 
                    <Route path="/fixtures" element= {
                    <Fixtures/>
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