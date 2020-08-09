import React, { useState, useEffect, useRef } from 'react'

export const MyComponent = () => {
    const [message, setMessage] = useState("initial message");
    const [seconds, setSeconds] = useState(0);
    const secondsRef = useRef(seconds);
    
    // 闭包问题
    useEffect(()=>{
        setTimeout(()=>{
            console.log(seconds);
            setSeconds(1);
            secondsRef.current = 1;
        },1000);

        setTimeout(()=>{
            setMessage(`Total seconds: ${secondsRef.current}`)
        },2000)
    },[])

    return (
        <>
            <h3>{message}</h3>
            <h4>{seconds}</h4>
        </>
    )
}

