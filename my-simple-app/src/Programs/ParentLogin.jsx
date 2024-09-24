import React, { useEffect, useState } from 'react'
import Login from './Login'

function ParentLogin() {

    const[isAuthenticated, setIsAuthenticated]=useState(false)

    useEffect(()=>{
       const authStatus=localStorage.getItem("isAuthenticated") 
       if(authStatus==="true"){
        setIsAuthenticated(true)
       }
    },[])

    const handleLogout=()=>{
        localStorage.removeItem("isAuthenticated")
        setIsAuthenticated(false)
    }

  return (
    <div>
        <h1>Authentication FLow</h1>
        {isAuthenticated ? (
            <div>
                <h2>Welcome User!</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
        :<Login setIsAuthenticated={setIsAuthenticated}/>}
    </div>
  )
}

export default ParentLogin