import React from 'react'
import { useFetch } from './useFetch'

function ParentCustomHook() {

    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts`)

    if(loading) return <div>Loading......</div>
    if(error) return <div>Error: {error}</div>

  return (
    <div>
        <h2>Fetched Data</h2>
        <ul >
            {data.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default ParentCustomHook