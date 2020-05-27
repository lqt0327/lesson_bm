import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';

Vue.use(Vuex);

let store = new Vuex.Store({
    modules:{
        index,
    }
});

export default store;