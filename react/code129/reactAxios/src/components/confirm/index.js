import React from 'react';
import ReactDom from 'react-dom';
import Confirm from './confirm';

export default function(msg,btns){
    let div=document.createElement("div");
    document.body.appendChild(div);
    let confirmInit=ReactDom.render(<Confirm/>,div);
    confirmInit.setData(msg,btns,div)
}