import config from '../../assets/js/conf/config';
import request from '../../assets/js/utils/request';

//提交订单
export function addOrderData(data){
    return request(config.baseApi+"/order/add?token="+config.token,"post",data);
}

//获取订单编号
export function getOrderNumData(uid){
    return request(config.baseApi+"/order/lastordernum?uid="+uid+"&token="+config.token);
}

//我的订单
export function getMyOrderData(data){
    return request(config.baseApi+"/user/myorder/index?uid="+data.uid+"& status="+data.status+"&token="+config.token+"&page="+data.page);
}

//取消订单
export function cancelOrderData(data){
    return request(config.baseApi+"/user/myorder/clearorder?uid="+data.uid+"&ordernum="+data.orderNum+"&token="+config.token+"");
}

//确认订单
export function sureOrderData(data){
    return request(config.baseApi+"/user/myorder/finalorder?uid="+data.uid+"&ordernum="+data.orderNum+"&token="+config.token);
}

//获取订单详情
export function getOrderInfoData(data) {
    return request(config.baseApi+"/user/myorder/desc?uid="+data.uid+"&ordernum="+data.ordernum+"&token="+config.token);
}

//待评价订单
export function getReviewOrderData(data){
    return request(config.baseApi+"/user/myorder/reviewOrder?uid="+data.uid+"&page="+data.page+"&token="+config.token);
}

//评价项目选项
export function getReviewServiceData(){
    return request(config.baseApi+"/home/reviews/service?token="+config.token);
}

//提交评价
export function addReviewData(data){
    return request(config.baseApi+"/home/reviews/add?token="+config.token,"post",data);
}