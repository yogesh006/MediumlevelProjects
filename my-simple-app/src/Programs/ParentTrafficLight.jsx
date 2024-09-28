import React from 'react'
import './ParentTrafficLight.css'

function ParentTrafficLight({color, isActive}) {
  return (
    <div className='signal-box'>
       <div className='signal' style={{backgroundColor:`${isActive ?color:"grey"}`}}> </div>
    </div>
   
  )
}

export default ParentTrafficLight