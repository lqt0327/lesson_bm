import {getNavsData, getGoodsData, getSwiperData, getRecomGoodsData} from '../../../api/index';

export default {
    namespaced:true,
    state:{
        navs: [],
        swipers: [],
        goods: [],
        recomGoods: []
    },
    mutations:{
        ["SET_NAVS"](state, payload) {
            state.navs = payload.navs;
        },
        ["SET_SWIPER"](state, payload) {
            state.swipers = payload.swipers;
        },
        ["SET_GOODS"](state, payload) {
            state.goods = payload.goods;
        },
        ["SET_RECOMGOODS"](state, payload) {
            state.recomGoods = payload.recomGoods;
        }
    },
    actions:{
        getNavs(conText, payload) {
            getNavsData().then(res => {
                console.log(res);
            })
        }
    }
}