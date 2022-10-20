

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
  


    console.log(r);

 

    

    return (
        
        
        <div className="stat_table">
        <table>
            <tr>
            <th>Name</th>
            <th>goals scored</th>
            </tr>
            {playerNames}
        </table>

        <table>
            <tr>
            <th>Name</th>
            <th>Assists</th>
            </tr>
            {playerNames}
        </table>

    
        
        </div>
        );
    
    

}

export default Stats;