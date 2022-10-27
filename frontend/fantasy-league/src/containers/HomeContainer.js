import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Fixtures from "../components/Fixtures";
import LeaderBoard from "../components/LeaderBoard";
import Stats from "../components/Stats";
import Team from "../components/Team";
import authService from "../services/auth.service";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAlert } from 'react-alert'
import logo from '../components/logo.png'

const HomeContainer = () => {
  const [fixtures, setFixtures] = useState([]);
  // contains gameweeks, teams, players
  const [footballData, setFootballData] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playerNames, setPlayerNames] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [backendPlayers, setBackEndPlayers] = useState([])
  const [trueUser, setTrueUser] = useState({})

  const findTrueUser = () =>{
    if(currentUser){
    for( let i = 0; i < users.length; i++){
      if (users[i].email === currentUser.email){
        setTrueUser(users[i])
      }
    }
  }
  }


  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };

    const fetchPlayers = async() => {
        const response = await fetch(`http://localhost:8080/players`)
        const databasePlayers = await response.json()
        setBackEndPlayers(databasePlayers)
    }

  const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal)
    }

    // const addPlayer = (player) => {
    //     setUsers([...users[0].players, player])
    //     // if(users.players >= 5) {
    //     //     alert("You've already added 5 players!");
    //     // } else {
    //     //     setUsers([...users.players, player])
    //     // }
    // }

  //   useEffect(()=>{
  //     const foundUser = users.find(user => user.email === currentUser.email);
  //     setCurrentUser(foundUser)
  //   },[currentUser])

  const fetchFixtures = async () => {
    const response = await fetch("http://localhost:8080/data/fixtures");
    const FixturesData = await response.json();
    setFixtures(FixturesData);
  };

  const fetchFootballData = async () => {
    const response = await fetch("http://localhost:8080/data/players");
    const footballStats = await response.json();
    setFootballData(footballStats);
    setLoading(false);
        fetchPlayers()
  };


  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/user");
    const JSONuser = await response.json();
    setUsers(JSONuser);
  };

  useEffect(() => {
    fetchFixtures();
    fetchFootballData();
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!loading) {
      createPlayersObj();
      findTrueUser();
      
    }
  }, [loading]);


  const createPlayersObj = () => {
    if (!loading) {
      const playerNamesCopy = { ...playerNames };
      footballData.elements.forEach((player) => {
        playerNamesCopy[
          player.id
        ] = `${player.first_name[0]}. ${player.web_name}`;
      });
      setPlayerNames(playerNamesCopy);
    }
  };

  const removePlayer = async (trueUser, removedPlayer) => {
    await fetch(
      `http://localhost:8080/user/removePlayer?userId=${trueUser.userId}&playerId=${removedPlayer.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    );
    await fetchUsers();

    const newUser = {...trueUser}
    newUser.players = newUser.players.filter(player=>player.id !== removedPlayer.id)
    setTrueUser(newUser)
    console.log(newUser);

  };


    const notify = () => toast("Full Team!");

    const createPlayer = async (player, trueUser) => {
        const response = await fetch(`http://localhost:8080/players`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(player)
        })

       

        const savedPlayer = await response.json()
        await fetch(`http://localhost:8080/user/addPlayer?userId=${trueUser.userId}&playerId=${savedPlayer.id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'}
        })
        await fetchUsers()
        // console.log(savedPlayer);
        const newUser = trueUser
        const newPlayer = player
        newPlayer.id=newUser.players.length + 1
        newUser.players.push(player)
        setTrueUser(newUser)
        // console.log(backendPlayers);
        // setBackEndPlayers(newPlayers)
        // console.log(backendPlayers);
        
    }

    const userGWScore = (user)=> { 
        let scoreTotal = 0
        user.players.map(player => {
          let found = footballData.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
          console.log(found.total_points)
          scoreTotal += found.event_points
          
        }
        )
        return scoreTotal;
      }

      const userOverallScore = (user)=> { 
        let scoreTotal = 0
        user.players.map(player => {
          let found = footballData.elements.find((apiPlayer) => player.apiid == apiPlayer.id) 
          console.log(found.total_points)
          scoreTotal += found.total_points
          
        }
        )
        return scoreTotal;
      }

    


  const teamNames = {
    1: "Arsenal",
    2: "Aston Villa",
    3: "Bournemouth",
    4: "Brentford",
    5: "Brighton",
    6: "Chelsea",
    7: "Crystal Palace",
    8: "Everton",
    9: "Fulham",
    10: "Leicester",
    11: "Leeds",
    12: "Liverpool",
    13: "Man City",
    14: "Man Utd",
    15: "Newcastle",
    16: "Nottingham Forest",
    17: "Southampton",
    18: "Tottenham Hotspurs",
    19: "West Ham",
    20: "Wolverhampton",
  };

  return (
    <BrowserRouter>
      <header id="header">
      <img id="logo" src = {logo} alt="Logo" ></img>

        <nav className="navbar navbar-expand navbar-dark bg-dark" id="nav">
          {currentUser ? (
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Logout
                </a>
              </li>
              <h3>
                <Link to="/">Fixtures</Link>
              </h3>
              <h3>
                <Link to="/team">Team</Link>
              </h3>
              <h3>
                <Link to="/stats">Stats</Link>
              </h3>
              <h3>
                <Link to="/leaderBoard">LeaderBoard</Link>
              </h3>
            </div>
            
          ) : (
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                  Sign up
                </Link>
              </li>
              <h3>
                <Link to="/">Fixtures</Link>
              </h3>
              {/* <h3>
                <Link to="/team">Team</Link>
              </h3> */}
              <h3>
                <Link to="/stats">Stats</Link>
              </h3>
              <h3>
                <Link to="/leaderBoard">LeaderBoard</Link>
              </h3>
            </div>
          )}
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
                    backendPlayers = {backendPlayers}
                    fetchPlayers={fetchPlayers}
                    setBackEndPlayers={setBackEndPlayers}
                    alert = {alert}
                    trueUser = {trueUser}
                    findTrueUser = {findTrueUser}
                    teamNames = {teamNames}
                    userGWScore = {userGWScore}
                    userOverallScore = {userOverallScore}
                    />
                    }/>
                    <Route path="/leaderboard" element= {
                    <LeaderBoard users ={users}
                    data ={footballData}
                    userGWScore = {userGWScore}
                    userOverallScore = {userOverallScore}
                    
                    />
                    }/>
                     <Route path="/stats" element= {
                    <Stats data = {footballData}/>
                    }/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/SignUp" element={<Signup toggleModal={toggleModal}/>} />
                    
                </Routes>

      {modal && (<div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <h2>Account Created!</h2>
              <button className="close-modal" onClick={toggleModal}>X</button>
            </div>
          </div>
        </div>)}
    </BrowserRouter>
  );
};


export default HomeContainer;
