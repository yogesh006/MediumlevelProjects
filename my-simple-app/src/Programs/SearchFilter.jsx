import React, { useState } from 'react'



function SearchFilter() {

    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grapes',
        'Mango',
        'Orange',
        'Pineapple',
        'Strawberry',
      ];

      const[searchItem, setSearchItem]=useState('')

      const handleSearchChange=(e)=>{
        setSearchItem(e.target.value)
      }

      const filterItemArray = items.filter((item)=>
        item.toLowerCase().includes(searchItem.toLowerCase()))

  return (
    <div>
        SearchFilter:
        <br/>
        <input type='text' value={searchItem} onChange={handleSearchChange}/>
        <br/>
        <ul>
            {filterItemArray.length>0 ?(
          filterItemArray.map((item, index) => <li key={index}>{item}</li>)
            ):(
            <li>No items found</li>
            
            )}
        </ul>
    </div>
  )
}

export default SearchFilter