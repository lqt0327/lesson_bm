import React,{useState,useEffect} from 'react';
import Css from "./assets/css/app.css";

function App(){
    const [title,setTitle]=useState("首页");
    function changeTitle(){
        setTitle("hooks");
        console.log(title);
    }
    useEffect(()=>{
        console.log(title);
        document.title=title;
        return ()=>{
            console.log("componentWillUnmount");
        }
    },[title]);
    return (
        <div className={Css["app"]}>
            {title} <button type="button" onClick={changeTitle.bind(this)}>改变title</button>
        </div>
    )
}

export default App;
