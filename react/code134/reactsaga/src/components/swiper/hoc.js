import React,{useEffect,useState,useRef,useCallback} from 'react';
import PropTypes from 'prop-types';
export default function Hoc(WithComponent){
    function HocComponent(props){
        let [data,setData]=useState([]);
        let [isInit,setIsInit]=useState(true);
        let [iIndex,setIndex]=useState(0);
        //创建一个表示，通用的容器
        let timer=useRef(null);
        //点击切换图片
        function changeImg(index){
            setIndex(index);
            if(data && data.length>0){
                for(let i=0;i<data.length;i++){
                    if(data[i].active){
                        data[i].active=false;
                        break;
                    }
                }
                data[index].active=true;
                setData(data);
            }
        }
        //自动播放
        const autoPlay=useCallback(()=>{
            clearInterval(timer.current);
            timer.current=setInterval(()=>{
                let tmpIndex=iIndex;
                if(data && data.length>0){
                    for(let i=0;i<data.length;i++){
                        if(data[i].active){
                            data[i].active=false;
                            break;
                        }
                    }
                    if(tmpIndex>=data.length-1){
                        tmpIndex=0;
                    }else {
                        tmpIndex++;
                    }
                    data[tmpIndex].active=true;
                    setIndex(tmpIndex);
                    setData(data);
                }
            },3000)
        },[data,iIndex]);
        //停止自动播放
        function stop(){
            clearInterval(timer.current);
        }
        useEffect(()=>{
            if(props.data && props.data.length>0 && isInit){
                setIsInit(false);
                for(let i=0;i<props.data.length;i++){
                    if(i===0){
                        props.data[i].active=true;
                    }else{
                        props.data[i].active=false;
                    }
                }
                setData(props.data);
            }
            autoPlay();
            //页面离开时执行
            return ()=>{
                clearInterval(timer.current);
            }
        },[props.data,isInit,autoPlay]);
        let newsProps={
            changeImg,
            data,
            stop,
            autoPlay
        };
        return (
            <WithComponent {...props} {...newsProps}></WithComponent>
        )
    }
    HocComponent.propTypes={
        data:PropTypes.array.isRequired
    };
    return HocComponent;
}