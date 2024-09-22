import React, { useState } from 'react'

function InputMasking() {

    const[inputValue, setInputValue]=useState('')
    const[isMasked, setIsMasked]=useState(true)

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }

  return (
    <div>InputMasking:
        <label htmlFor='sensitiveInput'> Enter your sensitive Information:
            <input 
                type={isMasked?'password':'text'}
                value={inputValue}
                onChange={handleInputChange}
                id="sensitiveInput"
                placeholder="Enter password or credit card number"
            />
        </label>
        <button onClick={()=> setIsMasked(!isMasked)}>
            {isMasked?"show":"hide"}
        </button>
    </div>
  )
}

export default InputMasking