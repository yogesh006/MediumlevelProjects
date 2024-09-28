import React, { useState } from 'react'

function DynamicForm() {

    const [items, setItems] = useState([''])//start with one input field


    const handleChange = (index, e) => {
        const newItems = [...items]
        newItems[index] = e.target.value
        setItems(newItems)
    }

    const handleAddField = () => {
        setItems([...items, ''])//add a new empty input field
    }

    const handleRemoveField = (index) => {
        const newItems = items.filter((_, i) => i !== index) //remove field at specifi index
        setItems(newItems)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Submitted : ' + items.join(', '))
    }
    return (
        <div>
            <h1>Dynamic Form</h1>

            <form onSubmit={handleSubmit}>
                {items.map((item, index) => (
                    <div key={index}>
                        <input type='text' value={item} onChange={(e) => handleChange(index, e)}
                            placeholder={`Item ${index + 1}`}
                        />
                      <button type='button' onClick={() => handleRemoveField(index)}>Remove Item</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddField}>Add Item</button>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default DynamicForm