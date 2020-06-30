<template>
    <div class='page'>
        <SubHeader title="订单详情"></SubHeader>
        <div class='main'>
            <div class='ordernum'>订单编号：{{orderInfo.ordernum}}</div>
            <div class='address-wrap'>
                <div class='skew-wrap'>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                </div>
                <div class='address-info'>
                    <div class='name'><img src="../../../assets/images/home/main/my2.png" alt=""/>{{orderInfo.name}}</div>
                    <div class='cellphone'><img src="../../../assets/images/common/cellphone.png" alt=""/>{{orderInfo.cellphone}}
                    </div>
                    <div class='address'>{{orderInfo.province}}{{orderInfo.city}}{{orderInfo.area}}{{orderInfo.address}}</div>
                </div>
                <div class='skew-wrap'>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                    <div class='skew'></div>
                </div>
            </div>
            <div class='buy-title'>购买的宝贝</div>
            <div class='goods-list' v-for="(item,index) in orderInfo.goods" :key="index" @click="$router.push('/goods/details?gid='+item.gid)">
                <div class='image'><img :src="item.image" alt=""/></div>
                <div class='goods-info'>
                    <div class='title'>{{item.title}}</div>
                    <div class='attr'>
                        <span class='amount'>x {{item.amount}}</span>
                        <span v-for="(item2,index2) in item.param" :key="index2">{{item2.title}}：
                            <template v-for="(item3,index3) in item2.param">{{item3.title}}</template>
                        </span>
                    </div>
                </div>
                <div class='price'>¥{{item.price}}</div>
            </div>
            <ul class='order-status'>
                <li>支付状态</li>
                <li>{{orderInfo.status=='0'?'待付款':orderInfo.status==='1'?'待收货':"已收货"}}</li>
            </ul>
            <div class='total-wrap'>
                <ul class='total'>
                    <li>商品总额</li>
                    <li>¥{{orderInfo.total}}</li>
                </ul>
                <ul class='total'>
                    <li>+运费</li>
                    <li>¥{{orderInfo.freight}}</li>
                </ul>
            </div>
            <div class='true-total'>
                <div class='total'>实付金额：<span>¥{{orderInfo.truetotal}}</span></div>
                <div class='order-time'>下单时间：{{orderInfo.ordertime}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapState} from "vuex";
    import SubHeader from "../../../components/sub_header";
    export default {
        name: "order-details",
        data(){
            return {
                ordernum:this.$route.query.ordernum?this.$route.query.ordernum:""
            }
        },
        components:{
            SubHeader
        },
        computed:{
            ...mapState({
                orderInfo:state=>state.order.orderInfo
            })
        },
        methods:{
            ...mapActions({
                getOrderInfo:"order/getOrderInfo"
            })
        },
        created(){
            this.$utils.safeUser(this);
            this.getOrderInfo({ordernum:this.ordernum});
        },
        mounted(){
            document.title=this.$route.meta.title;
        }
    }
</script>

<style scoped>
    .page {
        width: 100%;
        min-height: 100vh;
        background-color: #FFFFFF;
        overflow:hidden;
    }
    .sub-header {
        width: 100%;
        height: 1rem;
        background-color: #FFFFFF;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        border-bottom: 1px solid #EFEFEF;
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
    }

    .sub-header .back {
        width: 0.8rem;
        height: 0.8rem;
        background-image: url("../../../assets/images/home/goods/back.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .sub-header .title {
        width: 79%;
        height: auto;
        font-size: 0.32rem;
        text-align: center;
    }

    .sub-header .right-btn {
        width: auto;
        height: auto;
        font-size: 0.32rem;
    }

    .main {
        width: 100%;
        padding-top: 1.02rem;
    }

    .ordernum {
        width: auto;
        height: auto;
        font-size: 0.28rem;
        padding-left: 2%;
        padding-top: 0.2rem;
    }

    .address-wrap {
        width: 100%;
        margin-top: 0.4rem;
    }

    .address-wrap .skew-wrap {
        width: 100%;
        height: 0.08rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
    }

    .address-wrap .skew-wrap .skew {
        width: 5%;
        height: 100%;
        transform: skew(-40deg, 0deg);
        -webkit-transform: skew(-40deg, 0deg);
        background-color: #A2DAFB;
    }

    .address-wrap .address-info {
        width: 100%;
        height: 2rem;
        background-color: #FFFAF0;
        position: relative;
        z-index: 1;
    }

    .address-wrap .address-info .name {
        width: auto;
        height: auto;
        position: absolute;
        z-index: 1;
        left: 2%;
        top: 0.3rem;
        font-size: 0.28rem;
    }

    .address-wrap .address-info .name img, .address-wrap .address-info .cellphone img {
        width: 0.4rem;
        height: 0.4rem;
        vertical-align: middle;
    }

    .address-wrap .address-info .cellphone {
        width: auto;
        height: auto;
        position: absolute;
        right: 10%;
        top: 0.3rem;
        font-size: 0.28rem;
    }

    .address-wrap .address-info .address {
        width: 95%;
        height: 0.8rem;
        overflow: hidden;
        font-size: 0.28rem;
        position: absolute;
        z-index: 1;
        left: 2%;
        top: 1.2rem;
        color: #848689;
    }

    .buy-title {
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #EFEFEF;
        font-size: 0.28rem;
        line-height: 0.8rem;
        padding-left: 2%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .goods-list {
        width: 100%;
        height: 1.6rem;
        border-bottom: 1px solid #EFEFEF;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center;
        padding-left: 2%;
        padding-right: 2%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .goods-list .image {
        width: 1.2rem;
        height: 1.2rem;
    }

    .goods-list .image img {
        width: 100%;
        height: 100%;
    }

    .goods-list .goods-info {
        width: 65%;
        height: auto;
    }

    .goods-list .price {
        font-size: 0.28rem;
    }

    .goods-list .goods-info .title {
        width: 100%;
        height: 0.8rem;
        font-size: 0.28rem;
    }

    .goods-list .goods-info .attr {
        width: 100%;
        height: auto;
        font-size: 0.24rem;
        margin-top: 0.2rem;
    }

    .goods-list .goods-info .attr .amount {
        color: #848689;
    }

    .goods-list .goods-info .attr span {
        padding-right: 0.3rem;
    }

    .order-status {
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #EFEFEF;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center;
        font-size: 0.28rem;
        padding-left: 2%;
        padding-right: 2%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .total-wrap {
        width: 100%;
        height: 1.4rem;
        border-bottom: 1px solid #EFEFEF;
    }

    .total-wrap .total {
        width: 100%;
        height: auto;
        font-size: 0.28rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center;
        padding-left: 2%;
        padding-right: 2%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin-top: 0.3rem;
    }

    .total-wrap .total li:nth-child(2) {
        color: #f15353;
    }

    .true-total {
        width: 100%;
        height: 1rem;
    }

    .true-total .total {
        width: auto;
        text-align: right;
        font-size: 0.28rem;
        padding-right: 2%;
        margin-top: 0.2rem;
    }

    .true-total .total span {
        color: #f15353;
    }

    .true-total .order-time {
        width: auto;
        text-align: right;
        font-size: 0.24rem;
        padding-right: 2%;
        margin-top: 0.1rem;
        color: #848689;
    }
</style>