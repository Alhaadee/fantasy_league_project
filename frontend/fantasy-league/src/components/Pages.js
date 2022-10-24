import React from 'react'

export default function Pages({selectedWeek, setSelectedWeek}) {
  
    const buttons = () => {
        const arr = []
        for (let index = 0; index < 38; index++) {
            
            arr.push (<button key={index} onClick={handleClick}>{index + 1}</button>)

        }
        return arr
    }

    const handleClick = (e) => {
        setSelectedWeek(parseInt(e.target.textContent))  
        console.log(selectedWeek);
    }
  
  
    return (

    <div className='pages'>
       {buttons()}
    </div>
  )
}
