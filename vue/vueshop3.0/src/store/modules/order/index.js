import {addOrderData,getOrderNumData,getMyOrderData,cancelOrderData,sureOrderData,getOrderInfoData,getReviewOrderData} from "../../../api/order";

export default {
    namespaced:true,
    state:{
        orderNum:"",
        orders:[],
        orderInfo:{},
        reviewOrders:[]
    },
    mutations:{
        
    }
}