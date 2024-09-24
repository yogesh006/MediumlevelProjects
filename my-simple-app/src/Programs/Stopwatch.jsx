import React, { useEffect, useState } from 'react'

function Stopwatch() {

    const[time, setTime]=useState(0) //time in seconds
    const[isRunning, setIsRunning]=useState(false)


    useEffect(()=>{
        let timer=null
        if(isRunning){
            timer=setInterval(()=>{
                setTime((prevTime)=>prevTime+1)
            },1000)
        
        }else if(!isRunning && time!==0){
            clearInterval(timer)//clear timer if not workng
            /*  
             If the stopwatch is not running, there’s no need to keep updating the time variable. By clearing the interval, 
             we prevent unnecessary processing and ensure that the timer does not continue to increment when the user expects it to stop.
            */
        }


        return ()=> clearInterval(timer) //cleamup on component unmount
    },[isRunning,time])

    const startTimer=()=>{
        setIsRunning(true)
    }

    const stopTimer=()=>{
        setIsRunning(false)
    }

    const resetTimer=()=>{
        setIsRunning(false)
        setTime(0);
    }

    const formatTime=(seconds)=>{
        const minutes=Math.floor(seconds/60)
        const secs = seconds%60
        return `${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}`
    }
  return (
    <div>
        <h2>StopWatch</h2>
        <h1>{formatTime(time)}</h1>
        <div>
            <button
                onClick={startTimer}
                disabled={isRunning}
            >Start</button>

            <button 
                onClick={stopTimer}
                disabled={!isRunning}
            >
                Stop
            </button>
            <button
                onClick={resetTimer}
            >Reset</button>

        </div>
    </div>
  )
}

export default Stopwatch