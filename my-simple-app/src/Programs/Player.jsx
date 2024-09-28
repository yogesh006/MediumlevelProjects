import React, { useState } from 'react'

function Player() {

    const [name, setName]=useState('')
    const[players, setPlayers]=useState([])
    const[finalPlayers, setFinalPlayers]=useState([])

   
    const handleClick=(e)=>{
        if(players.indexOf(name)>=0){ // if same value already presnt in list , so not add againg

            return;
        }
        setPlayers((prev)=>{
            return [...prev, name]
        })
        setName('')
    }

    const handleAddClick=(value)=>{ 

        if(finalPlayers.indexOf(value)>=0){ // if same value already presnt in list , so not add againg

            return;
        }
            setFinalPlayers((prev)=>{
                return[...prev, value]
            })
    }
    const handleDeleteClick=(value)=>{
        const players=[...finalPlayers]
        const finalPlayersList = players.filter((e1)=>e1!==value)
        setFinalPlayers(finalPlayersList)
    }

  return (
    <div>
        <input type='text' name='players' placeholder='Enter your name'
            value={name} onChange={(e)=> setName(e.target.value)}

        />
        <button onClick={handleClick}>Add</button>

        {/*Master table */}
        <h1>Master Team</h1>
        {players.length>0 ? (<ul>
            {players.map((e1, index)=>{
                return(
                    <li key={index}>
                        <span>{e1}</span>
                        <button onClick={()=>handleAddClick(e1)}>Add</button>
                        <button onClick={()=>handleDeleteClick(e1)}>Delete</button>

                        {
                        
                        /*
                        You will get error if you pssss e1 in during function clling
                        <button onClick={(e1)=>handleDeleteClick(e1)}>Delete</button>
                         */}
                    </li>
                )
            })}
        </ul>):'No players Added'}

        {/* Final Team*/ }
        <h1>Final Team</h1>
        {finalPlayers.length>0 ? (
            <ul>
            {finalPlayers.map((e1, index)=>{
                return(
                    <li key={index}>
                        <span>{e1}</span>
                        
                    </li>
                )
            })}
        </ul>
    ):'No players Added'}
    </div>
  )
}

export default Player