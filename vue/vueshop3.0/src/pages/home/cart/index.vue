<template>
    <div class="cart-main">
        <SubHeader title="购物车" :isBack="$route.query.from==='goods_details'?true:false"></SubHeader>
        <div class='cart-list' v-for="(item,index) in cartData" :key="index">
            <div :class="{'select-btn':true, 'active':item.checked}" @click="selectItem(index)"></div>
            <div class='image-wrap'>
                <div class='image'><img :src="item.img"/></div>
                <div class='del' @click="delItem(index)">删除</div>
            </div>
            <div class='goods-wrap'>
                <div class='goods-title'>{{item.title}}</div>
                <div class='goods-attr'>
                    <span v-for="(item2,index2) in item.attrs" :key="index2">{{item2.title}}：
                        <template v-for="(item3,index3) in item2.param">{{item3.title}}</template>
                    </span>
                </div>
                <div class='buy-wrap'>
                    <div class='price'>¥{{item.price}}</div>
                    <div class="amount-input-wrap">
                        <div :class="item.amount>1?'btn dec':'btn dec active'" @click="DEC_AMOUNT({index:index})">-
                        </div>
                        <div class='amount-input'><input type="tel" :value="item.amount"
                                                         @input="SET_AMOUNT({index:index,amount:$event.target.value})"/>
                        </div>
                        <div class='btn inc' @click="INC_AMOUNT({index:index})">+</div>
                    </div>
                </div>
            </div>
        </div>
        <div class='orderend-wrap'>
            <div class='select-area'>
                <div class='select-wrap' @click="allSelect()">
                    <div :class="{'select-btn':true, active:isAllSelect}"></div>
                    <div class='select-text'>全选</div>
                </div>
                <div class='total'>运费：<span>¥{{freight}}</span>&nbsp;&nbsp;合计：<span>¥{{total}}</span></div>
            </div>
            <div :class="total>0?'orderend-btn':'orderend-btn disable'" @click="statement()">去结算</div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState, mapGetters} from "vuex";
    import SubHeader from "../../../components/sub_header";

    export default {
        data(){
            return {
                isAllSelect:true
            }
        },
        created(){
            this.checkAllSelect();
        },
        mounted() {
            document.title = this.$route.meta.title
        },
        computed: {
            ...mapState({
                cartData: state => state.cart.cartData
            }),
            ...mapGetters({
                total: "cart/total",
                freight: "cart/freight"
            })
        },
        components: {
            SubHeader
        },
        methods: {
            ...mapMutations({
                DEL_ITEM: "cart/DEL_ITEM",
                SET_AMOUNT: "cart/SET_AMOUNT",
                INC_AMOUNT: "cart/INC_AMOUNT",
                DEC_AMOUNT: "cart/DEC_AMOUNT",
                SELECT_ITEM: "cart/SELECT_ITEM",
                ALL_SELECT_ITEM:"cart/ALL_SELECT_ITEM"
            }),
            //删除商品
            delItem(index) {
                this.DEL_ITEM({index: index});
                this.checkAllSelect();
            },
            //选择商品
            selectItem(index) {
                this.SELECT_ITEM({index: index});
                if(this.cartData.length>0){
                    let isChecked=true;
                    for(let i=0;i<this.cartData.length;i++){
                        if(!this.cartData[i].checked){
                            isChecked=false;
                            break;
                        }
                    }
                    this.isAllSelect=isChecked;
                }else{
                    this.isAllSelect=false;
                }
            },
            //全选
            allSelect(){
                if(this.cartData.length>0){
                    this.isAllSelect=!this.isAllSelect;
                    this.ALL_SELECT_ITEM({checked:this.isAllSelect});
                }
            },
            //检测是否全选
            checkAllSelect(){
                if(this.cartData.length>0){
                    let isChecked=true;
                    for(let i=0;i<this.cartData.length;i++){
                        if(!this.cartData[i].checked){
                            isChecked=false;
                            break;
                        }
                    }
                    this.isAllSelect=isChecked;
                }else{
                    this.isAllSelect=false;
                }
            },
            //去结算
            statement(){
                if(this.total>0){
                    this.$router.push('/order');
                }
            }
        },
    }
</script>

<style scoped>

    .cart-main {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 2.2rem;
    }

    .cart-main .cart-list {
        width: 100%;
        height: 2.2rem;
        background-color: #FFFFFF;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        margin-top: 0.1rem;
    }

    .cart-main .cart-list .select-btn {
        width: 0.4rem;
        height: 0.4rem;
        border: #EFEFEF solid 1px;
        border-radius: 100%;
        margin-left: 0.2rem;
        margin-right: 0.3rem;
    }

    .cart-main .cart-list .select-btn.active {
        background-image: url("../../../assets/images/home/cart/checkmark.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        border: #FFFFFF solid 1px;
    }

    .cart-main .cart-list .image-wrap {
        width: 1.2rem;
        margin-right: 0.3rem;
    }

    .cart-main .cart-list .image-wrap .image {
        width: 100%;
        height: 1.2rem;
    }

    .cart-main .cart-list .image-wrap .image img {
        width: 100%;
        height: 100%;
    }

    .cart-main .cart-list .image-wrap .del {
        width: 100%;
        text-align: center;
        font-size: 0.24rem;
        color: #B5B5B5;
        margin-top: 0.2rem;
    }

    .cart-main .cart-list .goods-wrap {
        width: 64%;
        font-size: 0.24rem;
    }

    .cart-main .cart-list .goods-wrap .goods-title {
        width: 100%;
    }

    .cart-main .cart-list .goods-wrap .goods-attr {
        width: 100%;
        margin-top: 0.1rem;
    }

    .cart-main .cart-list .goods-wrap .goods-attr span {
        padding-right: 0.3rem;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap {
        width: 100%;
        height: 0.8rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .price {
        font-size: 0.28rem;
        color: #CC0004;
        margin-top: 0.2rem;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap {
        width: 2.04rem;
        height: 0.5rem;
        border: 1px solid #000000;
        margin-right: 0.2rem;
        border-radius: 0.08rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .btn {
        width: 0.6rem;
        height: 0.4rem;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.4rem;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .btn.active {
        color: #B5B5B5;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .dec {
        border-right: 1px solid #000000;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .amount-input {
        width: 0.76rem;
        height: 100%;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .amount-input input {
        width: 100%;
        height: 92%;
        text-align: center;
    }

    .cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .inc {
        border-left: 1px solid #000000;
    }

    .orderend-wrap {
        width: 100%;
        height: 1rem;
        background: #FFFFFF;
        position: fixed;
        z-index: 10;
        left: 0;
        bottom: 1.2rem;
        border-top: 1px solid #EFEFEF;
        display: flex;
        display: -webkit-flex;
    }

    .orderend-wrap .select-area {
        width: auto;
        height: 100%;
        flex: 3;
        -webkit-flex: 3;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center;
    }

    .orderend-wrap .select-area .select-wrap {
        width: auto;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .orderend-wrap .select-area .select-wrap .select-text {
        font-size: 0.24rem;
    }

    .orderend-wrap .select-area .select-wrap .select-btn {
        width: 0.4rem;
        height: 0.4rem;
        border: #EFEFEF solid 1px;
        border-radius: 100%;
        margin-left: 0.2rem;
        margin-right: 0.1rem;
    }

    .orderend-wrap .select-area .select-wrap .select-btn.active {
        background-image: url("../../../assets/images/home/cart/checkmark.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        border: #FFFFFF solid 1px;
    }

    .orderend-wrap .orderend-btn {
        width: auto;
        height: 100%;
        flex: 1;
        -webkit-flex: 1;
        background: #CC0004;
        font-size: 0.32rem;
        color: #FFFFFF;
        text-align: center;
        line-height: 1rem;
    }

    .orderend-wrap .orderend-btn.disable {
        background: #BFBFBF;
    }

    .orderend-wrap .total {
        font-size: 0.24rem;
        margin-right: 0.2rem;
    }

    .orderend-wrap .total span {
        color: #CC0004
    }
</style>
