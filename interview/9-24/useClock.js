import React, { useState, useEffect,
    useMemo, useRef } from 'react';
 // 逻辑
 let obj = {
   0: '星期日', 5: '星期五'
 }
 function useClock() {
   const [date, setDate] = useState(new Date());
   useEffect(() => {
     let timer = setInterval(() => {
       setDate(new Date())
     }, 1000)
     return () => {
       clearInterval(timer);
     }
   }, [])
   let dateStr = useMemo(() => {
     let day = date.getDay();
     return `${obj[day]}${date.toLocaleTimeString()}`
   }, [date])
   return dateStr;
 }
 /**
  * function Clock(){
     let count = 0;
     setInterval(() => {
       count + 1
     }, 1000);
  }
  function Clock(){
     let count = 1;
  }
  */
 // ui
 function Clock() {
   // 每隔 1s +1
   const [ count, setCount ] = useState(0)
   const ref = useRef();
   ref.current = count;
   const date = useClock();
   // console.log(count);
   // capture value
   useEffect(() => {
     let time = setInterval(() => {
       // setCount(c => {
       //   console.log(c);
       //   return c + 1
       // })
       // setCount(ref.current + 1);
       setCount(count + 1);
     }, 1000)
     // return () => {
     //   clearInterval(time)
     // }
   }, [])
   // [] []  []  [] 
   // [date]
   return (
     <div>
       { count } <br/>
       { date }
     </div>
   )
 }
 export default Clock;
 // export default useClock;
 