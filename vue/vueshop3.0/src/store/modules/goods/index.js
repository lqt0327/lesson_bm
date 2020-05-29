import Vue from 'vue';
import {getClassifyData,getDetailsData,getGoodsData,getSpecData} from '../../../api/goods';

export default {
    namespaced:true,
    state:{
        classifys:[],
        goods:[],
        attrs:[],
        details:{}
    },
    mutations:{
        ["SET_CLASSIFYS"](state, payload) {
            state.classifys = payload.classifys;
        }
    },
    actions:{
        getClassify(conText,payload){
            getClassifyData().then(res=>{
                // console.log(res);
                if(res.code===200){
                    for(let i=0;i<res.data.length;i++){
                        res.data[i].active=false;
                    }
                    console.log(res);
                    conText.commit("SET_CLASSIFYS",{classifys:res.data});
                    if(payload && payload.success){
                        payload.success();
                    }
                }
            })
        },
    }
}