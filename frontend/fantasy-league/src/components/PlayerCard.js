import { useState } from "react";
import PlayerPopUp from "./PlayerPopUp";

const PlayerCard = ({userplayer,APIplayers}) => {

    const [isOpen,setIsOpen] = useState(false)
    const [APIplayer,setAPIplayer] = useState({})

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    // const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

    const getAPIplayer = APIplayers.elements.map(player => {
            if (userplayer.apiid === player.id) {
                setAPIplayer(player)
                return (
                    <>
                    <img src={userplayer.playerImage}></img>
                    <h3>{player.web_name}</h3>
                    <h4>{player.total_points}</h4>
                    </>
                )
            }
        }) 
        
    

    return (
        <>
        <div>
            {getAPIplayer}
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