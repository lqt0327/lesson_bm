import React from "react";
import ReactDom from 'react-dom';
import Toast from './toast';

export default function(opts) {
    let div = document.createElement("div"),duration = opts.duration || 2000;
    document.body.appendChild(div);
    // Toast 和 div 挂载到render
    let toastInit = ReactDom.render(<Toast/>, div);
    toastInit.setOpts(opts);
    setTimeout(()=>{
        div.querySelector(".my-toast").style.animation = "hideToast 0.3s forwards";
        setTimeout(()=>{
            document.body.removeChild(div);
        },350)
        if(opts.onClose){
            opts.onClose();
        }
    },duration)
}