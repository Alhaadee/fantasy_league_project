import { useEffect, useState } from "react";
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAlert } from 'react-alert'
import PlayerInfo from "./PlayerInfo";


const TeamSearch = ({data,createPlayer, users,alert,addPlayerToUser, backendPlayers,fetchPlayers,setBackEndPlayers}) => {

    const [search, setSearch] = useState("");
    const [filteredPlayers, setFilteredPlayers] = useState(data.elements)
    // const [selectedPlayer,setSelectedPlayers] = useState(null)
    const [searchedPlayer, setSearchedplayer] = useState(null)
    
    

    
    const handleSearch = (e) =>{
        setSearch(e.target.value)
        if (e.target.value !== "") {
            setFilteredPlayers(data.elements.filter((player) => (player.web_name.toLowerCase().includes(e.target.value))))
        } 
        // else {
        //     setFilteredPlayers(data.elements)
        // }
    }

    const notify = () => toast("too many!");

    const backendPlayersNames = backendPlayers.map(player => player.name)




//     let top20Scorers = data.elements.sort((a, b) => b.goals_scored - a.goals_scored);
//   let topS = top20Scorers.slice(0,20)

//   const topScorers = topS.map((player, key) => {



    const playerListItems = filteredPlayers.slice(0,10).map((player) =>{

        return (
            // <li>{player.first_name}</li>
            // {show ? <li onClick={()=> setShow(true)}>Clue 1 = Area: {hidden.population} km<sup>2</sup></li> :null}

            // <li onClick={handleClick}>{player.web_name}</li>
            <li onClick={() => (setSearchedplayer(player))}>{player.web_name}</li>

            // {show ? <li>{player.web_name}</li setShow(true)}>
        )
    })

    


    return(
        <div>
            

        { searchedPlayer ? <PlayerInfo  
        searchedPlayer = {searchedPlayer}
        data ={data}
        users = {users}
        createPlayer = {createPlayer}
        backendPlayers = {backendPlayers}/> : <></>}

        <br></br>

        <br></br>

        <input type="text" value={search} onChange={handleSearch}/>
            
            {playerListItems}

        </div>
    )

    


}

export default TeamSearch