import React, { useState } from 'react'

function Login({setIsAuthenticated}) {

    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[error, setError]=useState(false)

    const handleSubmit=(e)=>{
            e.preventDefault()


            if(username==="admin" && password===password){
                localStorage.setItem("isAuthenticated",true)
                setIsAuthenticated(true)
                setError("")
            }else{
                setError("Incalid username or password")
            }
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type='text'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}
            <button type='submit'>Login</button>

        </form>
    </div>
  )
}

export default Login