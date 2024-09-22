import React, { useState } from 'react'

function DarkModeToggle() {

    const[darkMode, setDarkMode]=useState(false)

  return (
    <div>DarkModeToggle:
        <br/>
        <div style={{backgroundColor:darkMode?'grey':'white', color:darkMode?'white':'grey', padding:'20px'}}>
        <h1>{darkMode ? "Dark Mode on": "Light mode on"}</h1>
        <button onClick={()=> setDarkMode(!darkMode)}>
            {darkMode? "Turn Light on":"Turn dark Mode"}
        </button>
        </div>
    </div>
  )
}

export default DarkModeToggle