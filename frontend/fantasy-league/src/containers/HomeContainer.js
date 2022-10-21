import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Fixtures from "../components/Fixtures";
import LeaderBoard from "../components/LeaderBoard";
import Stats from "../components/Stats";
import Team from "../components/Team";

import data from "../footballData.json"

import fixturesData from "../fixtures.json"


const HomeContainer = () => {

    const [fixtures,setFixtures] = useState([])
    // contains gameweeks, teams, players
    const [footballData, setFootballData] = useState([])
    const [users , setUsers] = useState([])
    

    const fetchFixtures = async () => {

        const response = await fetch("http://localhost:8080/data/fixtures",{
            headers: {
                "Content-Type":"application/json"
            }
        })

        const FixturesData = await response.json()
        setFixtures(FixturesData)

    }

    const fetchFootballData = async()=> {
        const response = await fetch("http://localhost:8080/data/players")
        const footballStats = await response.json()
        setFootballData(footballStats)
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
                    <Fixtures fixtures={fixtures}/>
                    }/>
                    <Route path="/team" element= {
                    <Team users = {users}/>
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