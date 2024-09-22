import React, { useRef, useState } from 'react'

function ControlledVsUncontrolled() {

    const [controlledValue, setControlledvalue] = useState('')

    const uncontrolled = useRef(null)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Controlled Input: ", controlledValue)
        console.log("Uncontrolled Input: ",uncontrolled.current.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Controlled Input:
                <input type='text' value={controlledValue} onChange={(e)=> setControlledvalue(e.target.value)} placeholder='Enter text'/>
            </label>
            <br/>
            <label>
                Uncontrolled Input:
                <input type='text' ref={uncontrolled}/>
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledVsUncontrolled