import { useState } from "react";
import '../App.css';

const TeamSearch = ({data,createPlayer}) => {

    const [search, setSearch] = useState("");
    const [filteredPlayers, setFilteredPlayers] = useState(data.elements)
    

    
    const handleSearch = (e) =>{
        setSearch(e.target.value)
        if (e.target.value !== "") {
            setFilteredPlayers(data.elements.filter((player) => (player.web_name.toLowerCase().includes(e.target.value))))
        } 
        // else {
        //     setFilteredPlayers(data.elements)
        // }
    }



    const handleClick = (e) => {
        const selectedPlayer = filteredPlayers.find((player) => player.web_name === e.target.value)
        
        createPlayer({
            name: selectedPlayer.web_name,
            transferValue: selectedPlayer.now_cost/ 10,
            apiid: selectedPlayer.id
        })
    }



    const playerListItems = filteredPlayers.map((player) =>{

        return (
            // <li>{player.first_name}</li>
            <li onClick={handleClick}>{player.first_name}</li>
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