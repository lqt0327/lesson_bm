import React from 'react';
import ReactDom from 'react-dom';
import Confirm from './confrim';

export default function(msg,btns){
    // console.log(msg, btns);
    let div=document.createElement("div");
    document.body.appendChild(div);
    let confirmInit=ReactDom.render(<Confirm/>,div);
    confirmInit.setData(msg,btns,div)
}
