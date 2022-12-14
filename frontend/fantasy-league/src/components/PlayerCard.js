import { useEffect, useState } from "react";
import PlayerPopUp from "./PlayerPopUp";

const PlayerCard = ({userplayer,playersList,removePlayer,users,checkIfEmpty,trueUser,findTrueUser}) => {

    const [isOpen,setIsOpen] = useState(false)
    const [APIplayer,setAPIplayer] = useState({})

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const matchApiPlayer =() =>{
        let apiPlayerCopy = {...APIplayer}
        apiPlayerCopy = playersList.find(player => player.id === userplayer.apiid)
        setAPIplayer(apiPlayerCopy)
    }
    
    useEffect(() => {
      matchApiPlayer()
    }, [])
    
    const imgURL = `https://resources.premierleague.com/premierleague/photos/players/110x140/p${APIplayer.code}.png`;

    const handleRemovePlayer = () => {
        findTrueUser();
        removePlayer(trueUser,userplayer)

    }





    return (
        <>
        <div id="player-card">
            <img src={imgURL} height="125px"></img>
            <h3>{APIplayer.web_name} 
            <input
                type="button"
                value="ℹ"
                onClick={togglePopup}
                id="info-button"
            /></h3>

            {isOpen && <PlayerPopUp player={APIplayer} handleClose={togglePopup}/>}
            <button onClick={handleRemovePlayer} id="remove-button">❌</button>
            
        </div>
        </>
    )
}

export default PlayerCard;