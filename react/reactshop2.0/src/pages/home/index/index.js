/*eslint-disable*/
import React from 'react';
import Swiper from '../../../assets/js/libs/swiper.min.js';
import config from '../../../assets/js/conf/config.js';
import {request} from '../../../assets/js/libs/request.js';
import "../../../assets/css/common/swiper.min.css";
import Css from '../../../assets/css/home/index/index.css';
export default class  IndexComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            aSwiper:[],
            aNav:[],
            aGoods:[],
            aRecoGoods:[],
            bScroll:false,
            pageStyle:{display:"none"}
        }
        this.bScroll = true;
    }
    componentDidMount() {
        this.getSwiper();
        this.getNav();
    }
    getSwiper(){
        request(config.baseUrl+"/home/index/slide?token="+config.token).then(res=>{
            if (res.code===200){
                this.setState({aSwiper:res.data},()=>{
                    new Swiper(this.refs['swpier-wrap'], {
                        autoplay: 3000,
                        pagination : '.swiper-pagination',
                        autoplayDisableOnInteraction : false
                    })
                });
            }
        })
    }
    getNav() {
        request(config.baseUrl + "/home/index/nav?token=" + config.token).then(res=>{
            if(res.code === 200) {
                this.setState({aNav:res.data});
            }
        })
    }
    getGoodsLevel() {
        request(config.baseUrl+"/home/index/goodsLevel?token="+config.token).then(res=>{
            if (res.code ===200){
                this.setState({aGoods:res.data},()=>{
                    // lazyImg();
                })
            }
        })
    }
    render(){
        return(
            <div className={Css['page']}>
                <div className={Css['search-header']+" "+Css["red-bg"]}>
                    <div className={Css['classify-icon']}></div>
                    <div className={Css['search-wrap']}>
                        <div className={Css['search-icon']}></div>
                        <div className={Css['search-text']}>请输入宝贝名称</div>
                    </div>
                    <div className={Css['login-wrap']}>
                        <div className={Css['my']}></div>
                    </div>
                </div>
                <div ref="swpier-wrap" className={Css['swiper-wrap']}>
                    <div className="swiper-wrapper">
                        {
                            this.state.aSwiper!=null?
                            this.state.aSwiper.map((item,index)=>{
                                return(
                                    <div key={index} className="swiper-slide"><a href={item.webs} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.title}/></a></div>
                                )
                            }):""
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className={Css['quick-nav']}>
                    {
                        this.state.aNav!=null?this.state.aNav.map((item,index)=>{
                            return (
                                <ul key={index} className={Css['item']}>
                                    <li className={Css['item-img']}><img src={item.image} alt={item.title} /></li>
                                    <li className={Css['item-text']}>{item.title}</li>
                                </ul>
                            )
                        }):''
                    }
                </div>
                {
                    this.state.aGoods!=null ? this.state.aGoods.map((item,index) => {
                        return (
                            <div></div>
                        )
                    }) : ''
                }
            </div>
        );
    }
}