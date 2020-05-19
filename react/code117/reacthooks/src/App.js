import React,{useReducer} from 'react';
import Css from "./assets/css/app.css";
import {CounterReducer,defaultState} from './hooksReducer/counterReducer';
import Counter from './components/counter';
import ReactContext from './context';

let iCount = 0;
function App() {
    let [state, dispatch] = useReducer(CounterReducer, defaultState);
    console.log(ReactContext);
    return (
        <ReactContext.Provider value={{state, dispatch}}>
            <div className={Css["app"]}>
                <Counter></Counter>
                计数器：<button type="button" onClick={() => {dispatch(
                    {type:"dec", payload:{count:--iCount}}
                )}}>-</button> {state.count} <button type="button" onClick={() => {dispatch(
                    {type:"inc", payload:{count:++iCount}}
                )}}>+</button>
            </div>
        </ReactContext.Provider>
    )
}

export default App;
