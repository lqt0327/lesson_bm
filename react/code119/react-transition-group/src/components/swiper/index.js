import React from 'react';
import Hoc from './hoc';
import "./style.css";
export default Hoc((props)=>{
    // console.log(props);
    return(
        <div className="my-swiper-main" onMouseOver={props.stop} onMouseOut={props.autoPlay}>
            {
                (props.data && props.data.length>0) && props.data.map((item,index)=>{
                    return (
                        <div className={item.active?"slide show":"slide"} key={index}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.src} alt=""/></a>
                        </div>
                    )
                })
            }
            <div className="pagination">
                {
                    (props.data && props.data.length>0) && props.data.map((item,index)=>{
                        return (
                            <div className={item.active?"dot active":"dot"} key={index} onClick={()=>{props.changeImg(index)}}></div>
                        )
                    })
                }
            </div>
        </div>
    )
})