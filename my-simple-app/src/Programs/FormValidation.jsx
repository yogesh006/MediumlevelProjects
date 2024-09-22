import React, { useState } from 'react'

function FormValidation() {

    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[error, setError]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!email.includes('@')){
            setError('Invalid Email')
            return
        }
        if(password.length<6){
            setError('Password must be greater than 6'
            )
            return
        }
        setError('')
        alert('Form Submitted Successfully')
    }

  return (
    <div>
        FormValidation:
        <br/>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
           {error && <p style={{color:'red'}}>{error}</p>}
           <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default FormValidation