import React, { useEffect, useState } from 'react'

function UseEffectExample() {

    const[data, setData]=useState(null)

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=> response.json())
        .then((json)=> setData(json))

        return ()=>{
            console.log("component uncmounter successfully")
        }
    },[])
    
  return (
    <div>UseEffectExample
        <br/>
        {data ? <p>{data.title}</p>:<p>Data Loading.....</p>}
    </div>
  )
}

export default UseEffectExample