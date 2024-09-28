import React, { useState, useEffect } from 'react';

const InfiniteScroll1 = () => {
  const [posts, setPosts] = useState([]); // Store the fetched posts
  const [page, setPage] = useState(1); // Track current page number
  const [loading, setLoading] = useState(false); // Show loading indicator
  const [hasMore, setHasMore] = useState(true); // Check if more data is available

  // Fetch posts from API based on page number
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await response.json();

      // If no more data, stop fetching
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Infinite scroll: track when user scrolls to bottom
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    if (hasMore) {
      setPage((prevPage) => prevPage + 1); // Load more posts by incrementing page
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, [loading, hasMore]);

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts available.</p>}
    </div>
  );
};

export default InfiniteScroll1;



// import React, { useEffect, useState } from 'react'

// function InfiniteScroll1() {


//     const[posts, setPosts]= useState([])
//     const[page, setPage]=useState(1)
//     const[loading, setLoading]=useState(false)
//     const[hasMore, setHasMore]=useState(true)


//     const fetchPosts = async()=>{

//         setLoading(true)
//         try{

//             const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
//             const data = await response.json()
            

//             if(data.length===0){
//                 setHasMore(false)
//             }else{
//                 setPosts((prevPosts)=> [...prevPosts, ...data])
//                 console.log("posts: ",posts)
//             }
//         }catch(error){
//             console.error("Error fetching posts: ",error)
//         }finally{
//             setLoading(false)
//         }
//     }

//     useEffect(()=>{

//         fetchPosts()
//     },[page])


//     const handleScroll=()=>{

//         if(window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight || loading)
//             return

//         if(hasMore){
//             setPage((prevPage)=> prevPage+1)
//         }
//     }

//     useEffect(()=>{

//         window.addEventListener("scroll",handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }

//     },[loading, hasMore])

//   return (
//     <div>
//         <h2>InfiniteScroll1</h2>
//        <ul>
//        {posts.map((post)=>(

            
//            <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//            </li> 
//         ))}
//        </ul>
//        {loading && <div>Laoding more posts.....</div>}
//        {!hasMore && <p>No more post available</p>}
//     </div>
//   )
// }

// export default InfiniteScroll1