import React, { useState } from 'react'

function Counter() {
  const[count, setCount]=useState(0)

  const handleIncrement=()=>{
    setCount(count=>count+1)
  }


  const handleDecrement=()=>{
    if(count>0)
      setCount(count-1)
  }

  const handleReset=()=>{
    setCount(0)
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <div>
        {count}
      </div>
      <button onClick={handleDecrement}>Decrement</button>
      <br/>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter