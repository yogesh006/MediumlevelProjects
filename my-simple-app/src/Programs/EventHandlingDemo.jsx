import React, { useState } from 'react'

function EventHandlingDemo() {

    const[inputValue, setInputValue]=useState('')
    const[submittedValue, setSubmittedValue]=useState('')

const handleSubmit = (e)=>{
    e.preventDefault()
    setSubmittedValue(inputValue)
    setInputValue('')
}

const handleInputChange=(event)=>{
    setInputValue(event.target.value)
}

const handleClick=()=>{
    alert("button clicked")
}

  return (
    <div>
        <h2>EventHandlingDemo</h2>

        <form onSubmit={handleSubmit}>
            <label>
                Type Something:
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </label>

            <button type='submit'>Submit</button>
          
        </form>

        <button onClick={handleClick}>Click Me!</button>

        {submittedValue && (
            <div>
                <strong>Submitted Value: {submittedValue}</strong>
            </div>
        )}
    </div>
  )
}

export default EventHandlingDemo