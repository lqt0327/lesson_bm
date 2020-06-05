import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import goods from './modules/goods';
import goodsReview from "./modules/goods/review";
import search from "./modules/search";

Vue.use(Vuex);

let store = new Vuex.Store({
    modules:{
        index,
        goods,
        goodsReview,
        search
    }
});

export default store;