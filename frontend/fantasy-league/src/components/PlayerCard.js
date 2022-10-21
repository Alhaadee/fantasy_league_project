import { useEffect, useState } from "react";
import PlayerPopUp from "./PlayerPopUp";

const PlayerCard = ({userplayer,playersList}) => {

    const [isOpen,setIsOpen] = useState(false)
    const [APIplayer,setAPIplayer] = useState({})

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    // const userComponents = users.map(user => <h2>{user.userName} {user.teamName}</h2>)

    const updateApiPlayer =() =>{
        let apiPlayerCopy = {...APIplayer}
        apiPlayerCopy = playersList.find(player => player.id === userplayer.apiid)
        setAPIplayer(apiPlayerCopy)
    }
    
    useEffect(() => {
      updateApiPlayer()
    }, [])
    

    return (
        <>
        <div>
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