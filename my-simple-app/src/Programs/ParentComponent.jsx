import React, { useState } from 'react'

function ParentComponent() {

    const [message, setMessage]=useState('')

    const handleMessage=(childData)=>{
        setMessage(childData)
    }
    return (
    <div>ParentComponent:
        <br/>
        <ChildComponent sendMessage={handleMessage}/>
        <h2>Message: {message}</h2>
    </div>
  )
}

function ChildComponent({sendMessage}){

    return(
        <button onClick={()=> sendMessage('Hello from Child')}>Send Message</button>
    )
}

export default ParentComponent