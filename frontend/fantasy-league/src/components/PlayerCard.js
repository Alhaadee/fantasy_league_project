import { useState } from "react";
import PlayerPopUp from "./PlayerPopUp";

const PlayerCard = ({userplayer,footballData}) => {

    const [isOpen,setIsOpen] = useState(false)
    const [APIplayer,setAPIplayer] = useState({})

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    // const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

    console.log(footballData.elements.find(player=>player.id===userplayer.apiid));

    const getAPIplayer = footballData.elements.map(player => {
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