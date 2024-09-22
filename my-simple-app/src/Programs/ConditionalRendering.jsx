import React, { useState } from 'react'

function ConditionalRendering() {
  
  const[isLoggedIn, setIsLoggedIn]=useState(false)

  return (
    <div> 
      {isLoggedIn ? <h1>Welcome User !</h1>: <h1>"Please Log in"</h1> }
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out': 'Log In'}
      </button>
    </div>
  )
}

export default ConditionalRendering