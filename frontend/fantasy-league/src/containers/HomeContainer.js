import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Fixtures from "../components/Fixtures";
import LeaderBoard from "../components/LeaderBoard";
import Stats from "../components/Stats";
import Team from "../components/Team";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAlert } from 'react-alert'

const HomeContainer = () => {

    const [fixtures,setFixtures] = useState([])
    // contains gameweeks, teams, players
    const [footballData, setFootballData] = useState([])
    const [users , setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [playerNames, setPlayerNames] = useState ({})
    const [backendPlayers, setBackEndPlayers] = useState([])
    

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

    const fetchPlayers = async() => {
        const response = await fetch(`http://localhost:8080/players`)
        const databasePlayers = await response.json()
        setBackEndPlayers(databasePlayers)
    }



    const fetchUsers = async()=> {
        const response = await fetch("http://localhost:8080/user")
        const JSONuser = await response.json()
        setUsers(JSONuser)
    }

    // const addPlayer = (player) => {
    //     setUsers([...users[0].players, player])
    //     // if(users.players >= 5) {
    //     //     alert("You've already added 5 players!");
    //     // } else {
    //     //     setUsers([...users.players, player])
    //     // }
    // }

    

    useEffect(()=>{
        fetchFixtures()
        fetchFootballData()
        fetchUsers()
        fetchPlayers()
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
            playerNamesCopy[player.id] = `${player.first_name[0]}. ${player.web_name}`
        });
        setPlayerNames(playerNamesCopy)
    }
    }


    const removePlayer = async (userId,playerId) => {
        await fetch(`http://localhost:8080/user/removePlayer?userId=${userId}&playerId=${playerId}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'}
        })
        fetchUsers()
    }

    const notify = () => toast("Full Team!");

    const createPlayer = async (player) => {
        const response = await fetch(`http://localhost:8080/players`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(player)
        })

        const savedPlayer = await response.json()
        await fetch(`http://localhost:8080/user/addPlayer?userId=${1}&playerId=${savedPlayer.id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'}
        })
        await fetchUsers()
        // console.log(savedPlayer);
        // console.log(backendPlayers);
        setBackEndPlayers([...backendPlayers,savedPlayer])
        // console.log(backendPlayers);
        
    }



    const addPlayerToUser = async (userId,playerId) => {
        let targetUser = users.find((user) => user.id === userId)
        if (targetUser.players.length === 11) {
            console.log("too many");
        } else{
            await fetch(`http://localhost:8080/user/addPlayer?userId=${userId}&playerId=${playerId}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'}
            })
            fetchUsers()
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
                    <Team users={users} 
                    playersList={footballData.elements} 
                    removePlayer={removePlayer}
                    data ={footballData}
                    createPlayer = {createPlayer}
                    addPlayerToUser = {addPlayerToUser}
                    backendPlayers = {backendPlayers}
                    fetchPlayers={fetchPlayers}
                    setBackEndPlayers={setBackEndPlayers}
                    alert = {alert}
                    />
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