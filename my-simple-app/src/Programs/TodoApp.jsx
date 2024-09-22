import React, { useState } from 'react'

function TodoApp() {

    const [todos, setTodos]=useState([])
    const [inputValue, setInputValue]=useState('')

    const addTodo=()=>{
        // setTodos([...todos, {text: inputValue, completed:false}])
        setTodos([...todos,inputValue])
        setInputValue('')
    }

    // const toggleComplete = (index)=>{
    //     const newTodos = todos.map((todo, i)=>
    //         i===index ?{...todo, completed:!todo.completed}:todo
    //     )
    //     setTodos(newTodos)
    // }

    const deleteTodo=(index)=>{
        // const newTodos=todos.filter((_,i)=> i!==index)
        const newTodos=todos.filter((todo,i)=> i!==index)
        setTodos(newTodos)
    }

    return (
    <div>TodoApp:

        <input type='text' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>

        <ul>
            {todos.map((todo, index)=>(
                <li key={index}>
                    {/* <span
                        style={{textDecoration: todo.completed?'line-through':""}}
                        onClick={()=> toggleComplete(index)}
                    >
                        {todo.text}
                    </span> */}
                    {todo}
                    <button onClick={()=> deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp