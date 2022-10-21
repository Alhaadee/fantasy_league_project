const PlayerCard = ({player}) => {

    return (
        <>
        <div>
            <img src={player.playerImage}></img>
            <h3>{player.name}</h3>
        </div>
        </>
    )
}

export default PlayerCard;