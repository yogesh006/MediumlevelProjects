import React, { useEffect, useState } from 'react'

function Pagination() {

    const[data, setData]=useState([])
    const[currentPage, setCurrentPage]=useState(1)
    const[totalPages, setTotalPages]=useState(1)
    const itemsPerPage=10

    useEffect(()=>{

        const fetchData=async()=>{
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`)
                const totalItems = response.headers.get('x-total-count')
                console.log(totalItems)
                setTotalPages(Math.ceil(totalItems/itemsPerPage))
                const result = await response.json()
                setData(result)
                console.log("DATA ",data)

            }catch(err){
                console.error("Error Fetching data : ", err)
            }
        }

        fetchData()
    },[currentPage])

    const handlePageChange=(page)=>{
        if(page>0 && page<=totalPages){
            setCurrentPage(page)
        }
    }

  return (
    <div>
        <h1>Pagination</h1>
        <ul>
            { data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>

        <div>
            <button
                onClick={()=>handlePageChange(currentPage-1)}
                disabled={currentPage===1}
            >Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
                onClick={()=>handlePageChange(currentPage+1)}
                disabled={currentPage===totalPages}
            >Next</button>
        </div>
    </div>
  )
}

export default Pagination