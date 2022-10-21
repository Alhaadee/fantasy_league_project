import { useState } from "react";
import PlayerPopUp from "./PlayerPopUp";

const PlayerCard = ({userplayer,footballData}) => {

    const [isOpen,setIsOpen] = useState(false)
    const [APIplayer,setAPIplayer] = useState({})

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    // const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

    const getAPIplayer = 
        setAPIplayer(APIplayers.elements.find(player => player.id === userplayer.apiid))
    }
        


    return (
        <>
        <div>
            {getAPIplayer}
            <img src={userplayer.playerImage}></img>
            <h3>{APIplayer.web_name}</h3>
            <h4>{APIplayer.total_points}</h4>
            <input
                type="button"
                value="ℹ"
                onClick={togglePopup}
            />
            {isOpen && <PlayerPopUp player={APIplayer} handleClose={togglePopup}/>}
        </div>
        </>
    )
}

export default PlayerCard;