<template>
    <div class="page">
        <div ref="swpier-wrap" class='swpier-wrap swiper-container'>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in details.images" :key="index"><img :src="item" alt="" /></div>
            </div>
            <div ref="swiper-pagination" class="swiper-pagination"></div>
        </div>
        <div class='goods-ele-main'>
            <div class='goods-title'>{{details.title}}</div>
            <div class='price'>¥{{details.price}}</div>
            <ul class='sales-wrap'>
                <li>快递：{{details.freight}}元</li>
                <li>月销量{{details.sales}}件</li>
            </ul>
        </div>
        <div class='reviews-main'>
            <div class="reviews-title">商品评价（{{total}}）</div>
            <div v-show="reviews.length>0">
                <div class='reviews-wrap'>
                    <div class='reviews-list' v-for="(item,index) in reviews" :key="index">
                        <div class='uinfo'>
                            <div class='head'><img alt="" src="../../../assets/images/common/lazyImg.jpg" :data-echo="item.head" /></div>
                            <div class='nickname'>{{item.nickname}}</div>
                        </div>
                        <div class='reviews-content' v-html="item.content"></div>
                        <div class='reviews-date'>{{item.times}}</div>
                    </div>
                </div>
                <div class='reviews-more' @click="$router.replace('/goods/details/review?gid='+gid)">查看更多评价</div>
            </div>
            <div class="no-data" v-show="reviews.length<=0">暂无评价！</div>
        </div>
        <div class='bottom-btn-wrap'>
            <div class='btn fav' @click="addFav()">收藏</div>
            <div class='btn cart' @click="showPanel()">加入购物车</div>
        </div>
        <div class='mask' v-show="isPanel" @click="hidePanel()"></div>
        <div ref="cart-panel" :class="isPanel?'cart-panel up':'cart-panel down'">
            <div ref="goods-info" class='goods-info'>
                <div class='close-panel-wrap'>
                    <div class='spot'></div>
                    <div class="line"></div>
                    <div class='close' @click="hidePanel()"></div>
                </div>
                <div ref="goods-img" class='goods-img'>
                    <img :src="details.images && details.images[0]" alt="" />
                </div>
                <div class='goods-wrap'>
                    <div class='goods-title'>{{details.title}}</div>
                    <div class='price'>¥{{details.price}}</div>
                    <div class='goods-code'>商品编码:{{gid}}</div>
                </div>
            </div>
            <div class='attr-wrap'>
                <div class='attr-list' v-for="(item,index) in attrs" :key="index">
                    <div class='attr-name'>{{item.title}}</div>
                    <div class='val-wrap'>
                        <span :class="{'val':true ,'active':item2.active}" v-for="(item2,index2) in item.values" :key="index2" @click="SELECT_ATTR({index:index,index2:index2})">{{item2.value}}</span>
                    </div>
                </div>
            </div>
            <div class='amount-wrap'>
                <div class='amount-name'>购买数量</div>
                <div class="amount-input-wrap">
                    <div :class="amount>1?'btn dec':'btn dec active'" @click="amount>1?--amount:1">-</div>
                        <div class='amount-input'><input type="tel" :value="amount" @input="setAmount($event)" /></div>
                        <div class='btn inc' @click="++amount">+</div>
                </div>
            </div>
            <div class='sure-btn' @click="sureSubmit()">确定</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapState,mapMutations,mapActions} from "vuex";
    import Swiper from '../../../assets/js/libs/swiper';
    import TweenMax from '../../../assets/js/libs/TweenMax';
    import { Toast } from 'vant';
    Vue.use(Toast);
    export default {
        data(){
            return {
                isPanel:false,
                amount:1,
                gid:this.$route.query.gid?this.$route.query.gid:""
            }
        },
        created(){
            this.isMove=true;
            this.getDetails({gid:this.gid,success:()=>{
                    this.$nextTick(()=>{
                        document.title=this.details.title;
                        new Swiper(this.$refs['swpier-wrap'], {
                            autoplay: 3000,
                            pagination : this.$refs['swiper-pagination'],
                            paginationClickable :true,
                            autoplayDisableOnInteraction : false
                        })
                    });
                }});
            this.getSpec({gid:this.gid});
            this.getReviews({gid:this.gid,success:()=>{
                    this.$nextTick(()=> {
                        this.$utils.lazyImg();
                    })
                }});
        },
        computed:{
            ...mapState({
                attrs:state=>state.goods.attrs,
                details:state=>state.goods.details,
                total:state=>state.goodsReview.total,
                reviews:state=>state.goodsReview.reviews,
                isLogin:state=>state.user.isLogin
            })
        },
        mounted(){

        },
        methods:{
            ...mapMutations({
                "SELECT_ATTR":"goods/SELECT_ATTR",
                ADD_ITEM:"cart/ADD_ITEM"
            }),
            ...mapActions({
               "getDetails":"goods/getDetails",
                getSpec:"goods/getSpec",
                "getReviews":"goodsReview/getReviews",
                joinFav:"goods/addFav"
            }),
            //显示属性面板
            showPanel(){
                this.isPanel=true;
            },
            //隐藏属性面板
            hidePanel(){
                if(this.isMove){
                    this.isPanel=false;
                }
            },
            //设置数量
            setAmount(e){
                this.amount=e.target.value;
                this.amount=this.amount.replace(/[^\d]/g,"");
                if(!this.amount || this.amount==="0"){
                    this.amount=1;
                }
            },
            //确认提交
            sureSubmit(){
                if(this.attrs.length>0){
                    let isActive=false;
                    for(let i=0;i<this.attrs.length;i++){
                        isActive=false;
                        for(let j=0;j<this.attrs[i].values.length;j++){
                            if(this.attrs[i].values[j].active){
                                isActive=true;
                                break;
                            }
                        }
                        if(!isActive){
                            Toast('请选择'+this.attrs[i].title);
                            break;
                        }
                    }

                    if(isActive){
                        this.addCart();
                    }
                }
            },
            //添加购物车
            addCart(){
                if(this.isMove){
                    this.isMove=false;
                    let goodsImg=this.$refs['goods-img'],goodsInfo=this.$refs["goods-info"];
                    let cloneImg=goodsImg.cloneNode(true);
                    let cartIcon=document.getElementById("cart-icon");
                    cloneImg.style.cssText="position:absolute;z-index:10;left:0.2rem;top:0.2rem;width:0.4rem;height:0.4rem;";
                    goodsInfo.appendChild(cloneImg);
                    let cartTop=window.innerHeight-this.$refs['cart-panel'].offsetHeight;
                    TweenMax.to(cloneImg, 2, {bezier:[{x:cloneImg.offsetLeft, y:-100},{x:cartIcon.offsetLeft, y:-cartTop}],onComplete:()=>{
                            cloneImg.remove();
                            this.isMove=true;

                            //加入购物车
                            let attrs=[],param=[];

                            if(this.attrs.length>0){
                                for(let i=0;i<this.attrs.length;i++){
                                    param=[];
                                    for(let j=0;j<this.attrs[i].values.length;j++){
                                        if(this.attrs[i].values[j].active){
                                            param.push({paramid:this.attrs[i].values[j].vid,title:this.attrs[i].values[j].value})
                                        }
                                    }
                                    attrs.push({attrid:this.attrs[i].attrid,title:this.attrs[i].title,param:param})
                                }
                            }

                            let cartData={
                                gid:this.gid,
                                title:this.details.title,
                                amount:this.amount,
                                price:this.details.price,
                                img:this.details.images[0],
                                checked:true,
                                freight:this.details.freight,
                                attrs:attrs
                            };
                            this.ADD_ITEM({cartData:cartData})
                        }});
                    TweenMax.to(cloneImg,0.2,{rotation:360,repeat:-1});
                }
            },
            //我的收藏
            addFav(){
                if(this.isLogin){
                    this.joinFav({gid:this.gid,success:(res)=>{
                            Toast(res.data);
                        }})
                }else{
                    Toast("请登录会员");
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/common/swiper.css";
    .swpier-wrap{width:100%;height:7rem;overflow:hidden;position: relative;z-index:1;margin-top:1.2rem;}
    .swpier-wrap img{width:100%;}
    .goods-ele-main{width:100%;height:auto;background-color:#FFFFFF;margin:0 auto;padding-top:0.5rem;padding-bottom: 0.5rem;}
    .goods-ele-main .goods-title{width:90%;font-size:0.28rem;margin:0 auto;}
    .goods-ele-main .price{color:#F93036;width:90%;margin:0 auto;margin-top:0.2rem;font-size:0.32rem;}
    .goods-ele-main .sales-wrap{width:90%;margin:0 auto;font-size:0.24rem;color:#969696;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;margin-top:0.2rem;}

    .reviews-main{width:100%;background-color: #FFFFFF;margin-top:0.5rem;overflow:hidden;padding-bottom: 1.7rem}
    .reviews-main .reviews-title{color:#7b7f82;font-size:0.32rem;width:90%;margin:0 auto;margin-top:0.2rem;}
    .reviews-main .reviews-wrap{width:90%;margin:0 auto;}
    .reviews-main .reviews-wrap .reviews-list{width:100%;margin-top:0.4rem;}
    .reviews-main .reviews-list .uinfo{width:100%;display:flex;display:-webkit-flex;height:0.6rem;align-items: center;-webkit-align-items: center;}
    .reviews-main .reviews-list .uinfo .head{width:0.6rem;height:0.6rem;margin-right:0.2rem;}
    .reviews-main .reviews-list .uinfo .head img{width:100%;height:100%;border-radius: 100%;}
    .reviews-main .reviews-list .uinfo .nickname{width:auto;font-size:0.28rem;}
    .reviews-main .reviews-list .reviews-content{width:100%;margin:0 auto;font-size:0.28rem;margin-top:0.2rem;}
    .reviews-main .reviews-list .reviews-date{width:auto;font-size:0.28rem;color:#7b7f82;margin-top:0.2rem;}
    .reviews-main .reviews-more{width:2.44rem;height:0.56rem;border:solid 1px #D50A17;line-height:0.56rem;text-align:center;font-size:0.28rem;margin:0 auto;margin-top:0.5rem;border-radius: 0.1rem;}

    .bottom-btn-wrap{width:100%;height:1.2rem;position:fixed;bottom:0px;left:0px;z-index: 10;display:flex;display:-webkit-flex;}
    .bottom-btn-wrap .btn{width:auto;height:100%;flex:1;-webkit-flex:1;font-size:0.36rem;color:#FFFFFF;text-align: center;line-height:1.2rem;}
    .bottom-btn-wrap .btn.fav{background-color:#FCB40A;}
    .bottom-btn-wrap .btn.cart{background-color:#CC0004;}

    .mask{width:100%;height:100%;position:fixed;left:0px;top:0px;z-index:11;background-color:rgba(0,0,0,0.3)}
    .cart-panel{width:100%;height:60%;position: fixed;z-index:12;left:0px;bottom:0px;background-color:#f5f5f9;transition: transform 0.3s;-webkit-transition: transform 0.3s}
    .cart-panel.down{transform: translateY(120%);-webkit-transform: translateY(120%);}
    .cart-panel.up{transform: translateY(0%);-webkit-transform: translateY(0%);}
    .cart-panel .goods-info{width:98%;height:1.22rem;border-bottom:#EFEFEF solid 1px;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items:center;padding-left:0.2rem;position:relative;z-index:1;background-color:#FFFFFF;}
    .cart-panel .goods-info .goods-img{width:0.8rem;height:0.8rem;margin-right:0.3rem;}
    .cart-panel .goods-info .goods-img img{width:100%;height:100%;}
    .cart-panel .goods-info .goods-wrap{width:80%;height:auto;}
    .cart-panel .goods-info .goods-wrap .goods-title{width:100%;height:0.7rem;font-size:0.24rem;overflow:hidden;}
    .cart-panel .goods-info .goods-wrap .price{color:#F93036;font-size:0.24rem;}
    .cart-panel .goods-info .goods-wrap .goods-code{color:#888888;font-size:0.24rem;position:absolute;z-index:1;right:0.2rem;bottom:0px;}
    .cart-panel .close-panel-wrap{width:0.6rem;height:1.2rem;position:absolute;right:-0.2rem;top:-1rem;z-index:2;}
    .cart-panel .close-panel-wrap .spot{width:0.12rem;height:0.12rem;position:absolute;z-index:1;bottom:0px;left:0px;background-color:#000000;border-radius: 100%;}
    .cart-panel .close-panel-wrap .line{width:1px;height:0.72rem;background-color:#FFFFFF;position:absolute;z-index:1;left:0.05rem;bottom:0.05rem;}
    .cart-panel .close-panel-wrap .close{width:0.4rem;height:0.4rem;background-image:url('../../../assets/images/home/goods/x.png');background-size:100%;background-repeat: no-repeat;background-position: center;position:absolute;left:-0.14rem;top:0.1rem;z-index:1;}

    .cart-panel .attr-wrap{width:auto;max-height:3.5rem;padding-left:0.2rem;background-color:#FFFFFF;overflow-y: scroll;overflow-scrolling: touch;-webkit-overflow-scrolling: touch;}
    .cart-panel .attr-wrap .attr-list{width:100%;height:auto;margin-top:0.2rem;}
    .cart-panel .attr-list .attr-name{width:auto;font-size:0.32rem;}
    .cart-panel .attr-list .val-wrap{width:auto;margin-top:0.2rem;display:flex;display:-webkit-flex;flex-wrap: wrap;-webkit-flex-wrap: wrap;}
    .cart-panel .attr-list .val-wrap .val{background:#EFEFEF;font-size:0.32rem;padding:0.1rem 0.2rem;border-radius: 0.1rem;margin-right:0.17rem;display:table;margin-bottom:0.17rem;}
    .cart-panel .attr-list .val-wrap .val.active{color:#FFFFFF;background-color:#FDA208;}

    .cart-panel .amount-wrap{width:auto;padding-left:0.2rem;padding-top:0.2rem;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;height:0.64rem;align-items: center;-webkit-align-items: center;background-color:#FFFFFF;padding-bottom:0.3rem;}
    .cart-panel .amount-wrap .amount-name{width:auto;font-size:0.32rem;}
    .cart-panel .amount-wrap .amount-input-wrap{width:2.04rem;height:0.64rem;border:1px solid #000000;margin-right:0.2rem;border-radius: 0.08rem;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
    .cart-panel .amount-wrap .amount-input-wrap .btn{width:0.6rem;height:0.4rem;font-size:0.32rem;text-align:center;line-height:0.4rem;}
    .cart-panel .amount-wrap .amount-input-wrap .btn.active{color:#B5B5B5;}
    .cart-panel .amount-wrap .amount-input-wrap .dec{border-right: 1px solid #000000;}
    .cart-panel .amount-wrap .amount-input-wrap .amount-input{width:0.76rem;height:100%;}
    .cart-panel .amount-wrap .amount-input-wrap .amount-input input{width:100%;height:95%;text-align: center;}
    .cart-panel .amount-wrap .amount-input-wrap .inc{border-left: 1px solid #000000;}
    .cart-panel .sure-btn{width:100%;height:0.8rem;position:absolute;bottom:0px;left:0px;z-index:1;color:#FFFFFF;font-size:0.32rem;background-color:#CF0005;text-align:center;line-height:0.8rem;}

</style>
