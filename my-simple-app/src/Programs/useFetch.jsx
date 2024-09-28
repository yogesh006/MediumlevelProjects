import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {


    const[data, setData]=useState(null)
    const[loading, setLoading]=useState(true)
    const[error, setError]=useState(null)


    useEffect(()=>{

        const fetchData= async()=>{
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error('Error fetching the data')
                }
                const result = await response.json()

                setData(result)
                console.log("data" ,data)
                setError(null)
            }catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
            
        }

        fetchData()
    },[])

  return {data, loading, error}
}
