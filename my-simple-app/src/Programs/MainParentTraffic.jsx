import React, { useEffect, useState } from 'react'
import ParentTrafficLight from './ParentTrafficLight'

function MainParentTraffic({lights=["green", "yellow", "red"]}) {

    const[active, setActive]=useState(0)

    useEffect(()=>{
        
     const  timerId=  setInterval(()=>{
            setActive((prevActive)=> (prevActive+1)%lights.length)
        },1000)

        return ()=>{
            clearInterval(timerId)
        }

    },[])

  return (
    <>
    {/* <ParentTrafficLight /> */}

    {/* send color as a props to ParentTrafficLight */}
    {lights.map((color, index)=>(
        <ParentTrafficLight key={index} isActive={active===index} color={color}/>
    ))}

    </>
  )
}

export default MainParentTraffic