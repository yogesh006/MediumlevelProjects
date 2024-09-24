import React, { useState } from 'react'

function DragAndDropList() {


    const [items, setItems]=useState([
        'ITEM 1',
        'ITEM 2',
        'ITEM 3',
        'ITEM 4',
        'ITEM 5'
    ])
    
    const[draggingIndex, setDraggingIndex]=useState(null)

    const handleDragStart=(index)=>{
        setDraggingIndex(index)
    }

    const handleDragOver = (event)=>{
        event.preventDefault()
    }

    const handleDrop=(dropIndex)=>{
        const updatedItems = [...items]//to prevent mutate original array
        const [draggedItem] = updatedItems.splice(draggingIndex,1)//remove draggeditem
        updatedItems.splice(dropIndex,0,draggedItem)//add to drop position
        setItems(updatedItems)
        setDraggingIndex(null)//clear dragging index
    }

  return (
    <div style={{padding:'20px'}}>
        <h4>Simple Drag and Drop List</h4>
        <ul>
            {items.map((item, index)=>(
                <li
                key={index}
                style={{
                    padding: '10px',
                     marginBottom: '5px',
                    cursor:'move',
                    backgroundColor:'grey'
                }}
                    draggable
                    onDragStart={()=>handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={()=> handleDrop(index)}
                    

                >{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default DragAndDropList