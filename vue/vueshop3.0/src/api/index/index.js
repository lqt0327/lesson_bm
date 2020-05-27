import config from "../../assets/js/conf/config";
import request from "../../assets/js/utils/request";

// 首页快速导航
export function getNavsData() {
    return request(config.baseApi+"/home/index/nav?token="+config.token);
    // return request("http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f");
}

//首页轮播图
export function getSwiperData(){
    return request(config.baseApi+"/home/index/slide?token="+config.token);
}

//首页核心产品
export function getGoodsData(){
    return request(config.baseApi+"/home/index/goodsLevel?token="+config.token);
}

//首页推荐
export function getRecomGoodsData(){
    return request(config.baseApi+"/home/index/recom?token="+config.token);
}