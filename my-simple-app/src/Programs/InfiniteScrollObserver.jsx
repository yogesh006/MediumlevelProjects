import React, { useEffect, useRef, useState } from 'react'

// The Intersection Observer API provides a more efficient way to detect when elements enter the viewport, avoiding the need for a continuous scroll event listener.

// Intersection Observer: A more efficient way to track whether the bottom of the list is in the viewport, rather than listening to scroll events.
// Loader Ref: A ref is assigned to the loader element at the bottom, and when it becomes visible in the viewport, the page is incremented.
// Observer Setup: Once the component mounts, it sets up the observer to detect when the loader div enters the viewport, triggering more data fetches.

function InfiniteScrollObserver() {


    const[posts, setPost]=useState([])
    const[page, setPage]=useState(1)
    const[loading, setLoading]=useState(false)
    const[hasMore, setHasMore]=useState(true)
    const loader = useRef(null)



    const fetchPosts = async()=>{

        setLoading(true)
        try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
        const data = await response.json()

        if(data.length===0) setHasMore(false)
        else{
            setPost((prevPost)=> [...prevPost, ...data])
        }

        }catch(error){
            console.error("Error fetching posts :",error.message)
        }finally{
            setLoading(false)
        }


    }

    useEffect(()=>{

        if(hasMore){
            fetchPosts()
        }


    },[page])


    //interobserver to detectwhen loader element is visible
    useEffect(()=>{

       const observer = new IntersectionObserver(
            (entries)=>{
                if(entries[0].isIntersecting && hasMore){
                    setPage((prevPage)=>prevPage+1)
                }
            },
            {threshold:1.0}
        )
        if(loader.current){
            observer.observe(loader.current)//observe the loader div
        }

        return ()=> observer.disconnect()

    },[hasMore])

  return (
    <div>
        <h1>Infinite Scroll with Intersection Observer</h1>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
         <div ref={loader} style={{ height: '50px', margin: '10px', backgroundColor: '#f0f0f0' }}> 
          
            {loading && hasMore ? <p>Loading .....</p>: !hasMore && <p>No more posts available</p>}
        </div>
    </div>
  )
}

export default InfiniteScrollObserver