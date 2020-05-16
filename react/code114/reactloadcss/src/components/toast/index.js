import React from "react";
import ReactDom from 'react-dom';
import Toast from './toast';

export default function(opts){
    //创建div元素
    let div=document.createElement("div"),duration=opts.duration || 2000;
    document.body.appendChild(div);
//将Toast和div挂载到render
    let toastInit=ReactDom.render(<Toast/>,div);
    toastInit.setOpts(opts);
    setTimeout(()=>{
        div.querySelector(".my-toast").style.animation="hideToast 0.3s forwards";
        setTimeout(()=>{
            document.body.removeChild(div);
        },3000)
        if(opts.onClose){
            opts.onClose();
        }
    },duration)
};