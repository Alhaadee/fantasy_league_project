const PlayerPopUp = ({player,handleClose}) => {
    return (
        <div className="popup-box">
            <div className="box">
            <span className="close-icon" onClick={handleClose}>ⅹ</span>
            {player.name}
            </div>
        </div>
    )
}

export default PlayerPopUp;