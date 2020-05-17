import React from 'react';
import PropTypes from 'prop-types';
export default function Hoc(WithComponent){
    return class HocComponent extends React.Component{
        //检查数据类型
        static propTypes={
            data:PropTypes.array.isRequired
        };
        //默认值
        // static defaultProps={
        //     data:[]
        // };
        constructor(){
            super();
            this.state={};
            this.aData=[];
            this.isInit=true;
            this.timer=null;
            this.index=0;
        }
        componentDidMount(){
            this.autoPlay();
        }
        //自动播放
        autoPlay(){
            this.timer=setInterval(()=>{
                if(this.aData && this.aData.length>0){
                    this.isInit=false;
                    for(let i=0;i<this.aData.length;i++){
                        if(this.aData[i].active){
                            this.aData[i].active=false;
                            break;
                        }
                    }
                    if(this.index>=this.aData.length-1){
                        this.index=0;
                    }else {
                        this.index++;
                    }
                    this.aData[this.index].active=true;
                    this.setState({});
                }
            },3000)
        }
        //停止自动播放
        stop(){
            clearInterval(this.timer);
        }
        //点击切换图片
        changeImg(index){
            this.isInit=false;
            this.index=index;
            if(this.aData && this.aData.length>0){
                for(let i=0;i<this.aData.length;i++){
                    if(this.aData[i].active){
                        this.aData[i].active=false;
                        break;
                    }
                }
                this.aData[index].active=true;
                this.setState({});
            }
        }
        componentWillUnmount(){
            //页面离开的时候清除定时器，解决性能问题
            clearInterval(this.timer);
        }
        render(){
            this.aData=this.props.data;
            if(this.aData && this.aData.length>0 && this.isInit){
                for(let i=0;i<this.aData.length;i++){
                    if(i===0){
                        this.aData[i].active=true;
                    }else{
                        this.aData[i].active=false;
                    }
                }
            }
            return (
                <WithComponent {...this.props} changeImg={this.changeImg.bind(this)} stop={this.stop.bind(this)} autoPlay={this.autoPlay.bind(this)}></WithComponent>
            )
        }
    }
}