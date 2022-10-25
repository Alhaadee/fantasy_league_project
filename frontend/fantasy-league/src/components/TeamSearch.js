import { useEffect, useState } from "react";
import '../App.css';

const TeamSearch = ({data,createPlayer, addPlayerToUser, backendPlayers,fetchPlayers,setBackEndPlayers}) => {

    const [search, setSearch] = useState("");
    const [filteredPlayers, setFilteredPlayers] = useState(data.elements)
    // const [selectedPlayer,setSelectedPlayers] = useState(null)
    

    
    const handleSearch = (e) =>{
        setSearch(e.target.value)
        if (e.target.value !== "") {
            setFilteredPlayers(data.elements.filter((player) => (player.web_name.toLowerCase().includes(e.target.value))))
        } 
        // else {
        //     setFilteredPlayers(data.elements)
        // }
    }

    const handleClick =  (e) => {
        // console.log(e.target.textContent);
        // let copiedplayer = {...selectedPlayer}
        let copiedplayer = (data.elements.find((player) => player.web_name === e.target.textContent))
        // await setSelectedPlayers(copiedplayer)
        // console.log(copiedplayer.web_name)
        createPlayer({
            name: copiedplayer.web_name,
            transferValue: copiedplayer.now_cost/ 10,
            apiid: copiedplayer.id,
            position: copiedplayer.element_type
        })
        
        // addPlayerToUser(1,backendPlayers.slice(-1).pop().id)
        // console.log(backendPlayers.at(-1).id)
    }





    const playerListItems = filteredPlayers.map((player) =>{

        return (
            // <li>{player.first_name}</li>
            <li onClick={handleClick}>{player.web_name}</li>
        )
    })


    return(
        <div>
            <input type="text" value={search} onChange={handleSearch}/>
            
        {playerListItems}

        </div>
    )

    


}

export default TeamSearch