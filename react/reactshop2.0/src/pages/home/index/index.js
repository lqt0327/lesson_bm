/*eslint-disable*/
import React from 'react';
import Swiper from '../../../assets/js/libs/swiper.min.js';
import config from '../../../assets/js/conf/config.js';
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
            </div>
        );
    }
}