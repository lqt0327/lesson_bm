import React,{useContext} from 'react';
import ReactContext from '../context';
export default function Counter() {
    let counterContext = useContext(ReactContext);
    console.log(counterContext);
    return (
        <div>
            子组件计数器：<button type="button" onClick={()=>{counterContext.dispatch({type:"dec",payload:{count:--counterContext.state.count}})}}>-</button> {counterContext.state.count} <button type="button" onClick={()=>{counterContext.dispatch({type:"inc",payload:{count:++counterContext.state.count}})}}>+</button>
        </div>
    )
}