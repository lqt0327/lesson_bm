import Vue from 'vue';
import {getHotKeywordData,getSearchData,getAttrsData} from "../../../api/search";

export default {
    namespaced:true,
    state:{
        historyKeywords:localStorage['historyKeywords'] ? JSON.parse(localStorage['historyKeywords']) : [],
        hotKeywords:[],
        searchData: []
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
        ["SET_SEARCH_DATA"](state,payload){
            state.searchData=payload.searchData;
            state.total=payload.total;
        },
        ["SET_SEARCH_DATA_PAGE"](state,payload){
            if(payload.searchData.length>0){
                for(let i=0;i<payload.searchData.length;i++){
                    state.searchData.push(payload.searchData[i]);
                }
            }
        },
    },
    actions:{
        getHotKeyword(conText,payload) {
            getHotKeywordData().then(res=>{
                if(res.code === 200) {
                    conText.commit("SET_HOTKEYWORD",{hotKeywords:res.data});
                }
            })
        },
        getSearch(conText,payload) {
            getSearchData(payload).then(res=>{
                let pageNum = 0;
                if(res.code === 200) {
                    pageNum = res.pageinfo.pagenum;
                    conText.commit("SET_SEARCH_DATA",{searchData:res.data,total:res.pageinfo.total})
                }else{
                    pageNum = 0;
                    conText.commit("SET_SEARCH_DATA",{searchData:[],total:0});
                }
                if(payload.success) {
                    payload.success(pageNum);
                }
            })
        },
        getSearchPage(conText,payload){
            getSearchData(payload).then(res=>{
                if(res.code===200){
                    conText.commit("SET_SEARCH_DATA_PAGE",{searchData:res.data});
                }
            })
        },
    }
}