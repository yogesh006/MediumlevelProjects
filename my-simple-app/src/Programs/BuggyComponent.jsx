import React, { useState } from 'react'

function BuggyComponent() {

    const[hasError, setHasError]=useState(false)

    if(hasError){
        throw new Error('Oops! something went wrong')
    }

  return (
    <div>
        <h3>Buggy Component</h3>
        <button onClick={()=> setHasError(true)}>Trigger Error</button>
    </div>
  )
}

export default BuggyComponent