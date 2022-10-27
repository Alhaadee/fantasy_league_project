import { useEffect, useState } from "react";
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAlert } from 'react-alert'
import PlayerInfo from "./PlayerInfo";


const TeamSearch = ({data,createPlayer, users,alert, trueUser,findTrueUser, backendPlayers,fetchPlayers,setBackEndPlayers, teamNames, transCount}) => {

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

    // const handleClick =  async (e) => {
    //     // console.log(e.target.textContent);
    //     // let copiedplayer = {...selectedPlayer}
    //     let copiedplayer = (data.elements.find((player) => player.web_name === e.target.textContent))
    //     // await setSelectedPlayers(copiedplayer)
    //     // console.log(copiedplayer.web_name)
    //     if (trueUser.players.length === 11) {
    //         alert("You've already got a full team")
            
    //     } else if (backendPlayersNames.includes(copiedplayer.web_name)) {
    //         alert("You already have that player")
    //     } else{
    //          findTrueUser();
    //          createPlayer({
    //             name: copiedplayer.web_name,
    //             transferValue: copiedplayer.now_cost/ 10,
    //             apiid: copiedplayer.id,
    //             position: copiedplayer.element_type
    //         }, trueUser)
            
    //     }

    
    // }


//     let top20Scorers = data.elements.sort((a, b) => b.goals_scored - a.goals_scored);
//   let topS = top20Scorers.slice(0,20)

//   const topScorers = topS.map((player, key) => {



    const playerListItems = filteredPlayers.slice(0,10).map((player, index) =>{

        return (
            // <li>{player.first_name}</li>
           

            // <li onClick={handleClick}>{player.web_name}</li>


            // <li className="search" onClick={() => (setSearchedplayer(player))}>{player.web_name}</li>

            <li id="player-search-list" onClick={() => (setSearchedplayer(player))}>{player.web_name}</li>

        )
    })

    


    return(
        <div>
            

        <br></br>
        <br></br>


        { searchedPlayer ? <PlayerInfo  
        searchedPlayer = {searchedPlayer}
        teamNames = {teamNames}
        data ={data}
        users = {users}
        createPlayer = {createPlayer}
        backendPlayers = {backendPlayers}
        trueUser={trueUser}
        findTrueUser={findTrueUser}
        transCount={transCount}/> : <></>}

        <br></br>

        <br></br>

        <input placeholder="Find a player.." id="player-search-bar" type="text" value={search} onChange={handleSearch}/>
            
            {playerListItems}

        </div>
    )

    


}

export default TeamSearch