import React, { useState } from 'react'
import "./StarRating.css"


function SimpleStarRating() {

    const[selectedStarCount, setSelectedStarCount]=useState(0)

    const[selectedHoverStarCount, setSelectedHoverStarCount]=useState(0)

  return (
    <div className='App'>
        <h1>SimpleStarRating</h1>
        <br/>
        <div>

        {[...Array(5)].map((_, index)=>{
                return <span 
                key={index} 
                
                className={`${index+1<=selectedStarCount? 'selected': ''} ${index+1<=selectedHoverStarCount? 'selected': ''}`}
                
                onMouseOver={()=>{
                    setSelectedHoverStarCount(index+1)
                }}

                onMouseOut={()=>{
                    setSelectedHoverStarCount(0)
                }}

                onClick={()=>setSelectedStarCount(index+1)}
                
                >&#9733;</span>
            }   )}


            {/* {[...Array(5)].map((_, index)=>{
                return <span 
                key={index} 
                onClick={()=>setSelectedStarCount(index+1)}
                className={`${index+1<=selectedStarCount? 'selected': ''}`}
                >&#9733;</span>
            }   )} */}

            {/* <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span> */}
        </div>
        Rating Count : {selectedStarCount}
        <br/>
        Hover Rating Count : {selectedHoverStarCount}
    </div>
  )
}

export default SimpleStarRating