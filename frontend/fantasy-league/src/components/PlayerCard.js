import { useEffect, useState } from "react";
import PlayerPopUp from "./PlayerPopUp";

const PlayerCard = ({userplayer,playersList,removePlayer,users,checkIfEmpty}) => {

    const [isOpen,setIsOpen] = useState(false)
    const [APIplayer,setAPIplayer] = useState({})

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const updateApiPlayer =() =>{
        let apiPlayerCopy = {...APIplayer}
        apiPlayerCopy = playersList.find(player => player.id === userplayer.apiid)
        setAPIplayer(apiPlayerCopy)
    }
    
    useEffect(() => {
      updateApiPlayer()
    }, [])
    
    const imgURL = `https://resources.premierleague.com/premierleague/photos/players/110x140/p${APIplayer.code}.png`;

    const handleRemovePlayer = () => {
        removePlayer(1,userplayer.id)

    }





    return (
        <>
        <div id="player-card">
            <img src={imgURL}></img>
            <h3>{APIplayer.web_name}</h3>
            <h4>{APIplayer.total_points}</h4>
            <input
                type="button"
                value="ℹ"
                onClick={togglePopup}
            />
            {isOpen && <PlayerPopUp player={APIplayer} handleClose={togglePopup}/>}
            <button onClick={handleRemovePlayer}>ⅹ</button>
            
        </div>
        </>
    )
}

export default PlayerCard;