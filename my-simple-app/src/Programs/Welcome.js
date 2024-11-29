import React from 'react'

function Welcome({username, onLogout}) {

    const data=[
        'data1',
        'data2',
        'data3'
    ]
  return (
    <div>
        <p>Welcome {username}</p>
        <ul>
            {data.map((num,index)=>(
                <li key={index}>{num}</li>
            ))}
        </ul>
        <button onClick={onLogout}>Logout</button>
    </div>

  )
}

export default Welcome
