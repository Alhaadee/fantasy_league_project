import "./Stats.css"
// import { MDBDatatable } from 'mdb-react-ui-kit';
const Stats = ({data}) => {

    let r = data.elements.sort((a, b) => b.goals_scored - a.goals_scored);
    let p = r.splice(20)

    const playerNames = r.map((player, key) => {
        return (
          <tr key={key}>
            <td>{player.first_name} {player.second_name}</td>
            <td>{player.goals_scored}</td>
          </tr>
        )
    })
    // console.log(playerNames)


    console.log(r);

    // const table = {
    //     columns : ["name" , "goals"],
    //     rows : [playerNames]
    // }

    // const rows = [playerNames]

    

    return (
        // data.elements.map((player, index) => 
        //      <p> {player.first_name} {player.second_name} {player.goals_scored}</p>)
        
        <div className="stat_table">
        <table>
            <tr>
            <th>Name</th>
            <th>goals scored</th>
            </tr>
            
            {playerNames}
        </table>

    
        
        </div>
        );
    
    

}

export default Stats;