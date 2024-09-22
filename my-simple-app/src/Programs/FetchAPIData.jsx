import React, { useEffect, useState } from 'react'

function FetchAPIData() {

    const [datas, setDatas]=useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> response.json())
            .then((json)=> setDatas(json))
    },[])

  return (
    <div>FetchAPIData
        <br/>
        {datas.map((data)=>(
            <ul key={data.id}>
                <li>{data.title}</li>
            
            </ul>
        ))}
    </div>
  )
}

export default FetchAPIData