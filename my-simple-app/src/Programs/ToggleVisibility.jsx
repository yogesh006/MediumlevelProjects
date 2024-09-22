import React, { useState } from 'react'

function ToggleVisibility() {

    const[isVisible, setIsVisibile]=useState(true)

  return (
    <div>
        ToggleVisibility
        
        <br/>
        {isVisible && <p>This test is visible</p>}
        <button onClick={()=>setIsVisibile(!isVisible)}>
        {isVisible? "Hide":"Show"}
        </button>
    </div>
  )
}

export default ToggleVisibility