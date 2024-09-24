import React, { useCallback, useMemo, useState } from 'react'


function ExpensiveCalculation({count}){

    const expensiveResult = useMemo(()=>{
        console.log("Running expensive calculation ....")
        let res=0
        for(let i=0;i<10000000;i++){
            res+=count
        }
        return res
    },[count])

    return(
        <div>
            <h4>Expensive calculation result: {expensiveResult}</h4>
        </div>
    )
}

const ChildComponent = React.memo(({onClick, label})=>{

    console.log(`Rendering Child component -- ${label}`)

    return(
        <button onClick={onClick}>
            {label}
        </button>
    )
})


function MemoizationCallbackuseMemo() {

    const[count, setCount]=useState(0)
    const[toggle, setToggle]=useState(false)


    const increment = useCallback(()=>{
        setCount((prevCount)=> prevCount+1)
    },[])

    const toggleButton=useCallback(()=>{
        setToggle((prevToggle)=> !prevToggle)
    },[])


  return (
    <div>
        <h1>REact memoization Example</h1>
        <p>Count: {count}</p>
        <ExpensiveCalculation count={count}/>

        <ChildComponent onClick={increment} label="Increment Count"/>
        <ChildComponent onClick={toggleButton} label="ToggleButton"/>

        <p>Toggle State:{toggle?"ON":"OFF"}</p>

        {/* How It Works:
Memoization of expensive calculations: The expensive calculation inside ExpensiveCalculation only runs when the count changes, thanks to useMemo. This avoids repeated execution of heavy operations.
Preventing unnecessary renders: useCallback ensures the increment and toggleButton functions don’t cause ChildComponent to re-render unless the relevant state (count or toggle) actually changes. */}

    </div>
  )
}

export default MemoizationCallbackuseMemo