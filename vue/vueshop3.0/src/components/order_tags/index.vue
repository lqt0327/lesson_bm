<template>
    <div class="tags-wrap">
        <div :class="{tags:true, active:status==='all'?true:false}" @click="$router.replace('/user/order?status=all')">全部订单</div>
        <div :class="{tags:true, active:status==='0'?true:false}" @click="$router.replace('/user/order?status=0')">待付款</div>
        <div :class="{tags:true, active:status==='1'?true:false}" @click="$router.replace('/user/order?status=1')">待收货</div>
        <div :class="{tags:true, active:status==='2'?true:false}" @click="$router.replace('/user/order/review?status=2')">待评价</div>
    </div>
</template>

<script>
export default {
    name:"order-tags",
    props:{
        status:{
            type:String,
            default:"all"
        }
    }
}
</script>

<style scoped>
    .tags-wrap{width:100%;height:0.8rem;background-color:#FFFFFF;position: fixed;z-index:2;left:0;top:1.02rem;border-bottom:#DCDCDC solid 1px;display:flex;display:-webkit-flex;}
    .tags-wrap .tags{width:25%;height:100%;text-align:center;font-size:0.28rem;line-height:0.8rem;}
    .tags-wrap .tags.active{border-bottom:#E42321 1px solid;}
</style>