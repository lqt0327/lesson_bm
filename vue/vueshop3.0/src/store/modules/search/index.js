import Vue from 'vue';
import {getHotKeywordData,getSearchData,getAttrsData} from "../../../api/search";

export default {
    namespaced:true,
    state:{
        historyKeywords:localStorage['historyKeywords'] ? JSON.parse(localStorage['historyKeywords']) : [],
        hotKeywords:[],
    },
    mutations:{
        ["SET_KEYWORDS"](state,payload) {
            state.historyKeywords = payload.historyKeywords;
            localStorage['historyKeywords'] = JSON.stringify(state.historyKeywords);
        },
        ["CLEAR_KEYWORDS"](state,payload) {
            state.historyKeywords = [];
            localStorage.removeItem("historyKeywords");
        },
        ["SET_HOTKEYWORD"](state,payload){
            state.hotKeywords=payload.hotKeywords;
        },
    },
    actions:{
        getHotKeyword(conText,payload) {
            getHotKeywordData().then(res=>{
                if(res.code === 200) {
                    conText.commit("SET_HOTKEYWORD",{hotKeywords:res.data});
                }
            })
        }
    }
}