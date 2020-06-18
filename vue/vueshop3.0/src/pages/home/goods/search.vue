<template>
    <div class='page'>
        <div class='search-top'>
            <div class='search-header'>
                <div class='back' @click="$router.go(-1)"></div>
                <div class='search-wrap' @click="searchShow.show=true">
                    <div class='search-icon'></div>
                    <div class='search-text'>{{keyword}}</div>
                </div>
                <div class='screen-btn' @click="isScreen=true">筛选</div>
            </div>
            <div class='order-main'>
                <div :class="{'order-item':true, active:isPriceOrder}" @click="selectPrice()">
                    <div class="order-text">综合</div>
                    <div class='order-icon'></div>
                    <ul class='order-menu' v-show="isPriceOrder">
                        <li :class="{active:item.active}" v-for="(item,index) in priceOrderList" :key="index" @click="selectPriceOrder(index)">{{item.title}}</li>
                    </ul>
                </div>
                <div :class="{'order-item':true ,active:isSalesOrder}" @click="selectSales()">
                    <div class="order-text">销量</div>
                </div>
            </div>
        </div>
        <div class='goods-main'>
            <div class='goods-list' v-for="(item,index) in searchData" :key="index" @click="$router.push('/goods/details?gid='+item.gid)">
                <div class='image'><img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item.image"/></div>
                <div class='goods-content'>
                    <div class='goods-title'>{{item.title}}</div>
                    <div class='price'>¥{{item.price}}</div>
                    <div class='sales'>销量<span>{{item.sales}}</span>件</div>
                </div>
            </div>
            <div class="no-data" v-show="searchData.length<=0">没有相关商品！</div>
        </div>
        <div ref="mask" class='mask' v-show="isScreen" @click="isScreen=false"></div>
        <div ref="screen" :class="isScreen?'screen move':'screen unmove'">
            <div>
                <div class='attr-wrap'>
                    <div class='attr-title-wrap' @click="isClassify=!isClassify">
                        <div class='attr-name'>分类</div>
                        <div :class="{'attr-icon':true, up:isClassify}"></div>
                    </div>
                    <div class='item-wrap' v-show="!isClassify">
                        <div v-for="(item,index) in classifys" :key="index" :class="{item:true, active:item.active}" @click="selectClassify({index:index})">{{item.title}}</div>
                    </div>
                </div>
                <div style='width:100%;height:1px;backgroundColor:#EFEFEF'></div>
                <div class='attr-wrap'>
                    <div class='attr-title-wrap' @click="HIDE_PRICE()">
                        <div class='attr-name'>价格区间</div>
                        <div class='price-wrap' @click.stop>
                            <div class='price-input'><input type="tel" placeholder="最低价" :value="minPrice" @input="SET_MINPRICE({minPrice:$event.target.value})" /></div>
                            <div class='price-line'></div>
                            <div class='price-input'><input type="tel" placeholder="最高价" :value="maxPrice" @input="SET_MAXPRICE({maxPrice:$event.target.value})" /></div>
                        </div>
                        <div :class="{'attr-icon':true, up:priceData.isHide}"></div>
                    </div>
                    <div class='item-wrap' v-show="!priceData.isHide">
                        <div :class="{item:true, active:item.active}" v-for="(item,index) in priceData.items" :key="index" @click="SELECT_PRICE({index:index})">{{item.price1}}-{{item.price2}}</div>
                    </div>
                </div>
                <div style='width:100%;height:0.3rem;backgroundColor:#EFEFEF'></div>
                <div>
                    <div class='attr-wrap' v-for="(item,index) in attrs" :key="index">
                        <div class='attr-title-wrap' @click="HIDE_ATTR({index:index})">
                            <div class='attr-name'>{{item.title}}</div>
                            <div :class="{'attr-icon':true, up:item.isHide}"></div>
                        </div>
                        <div class='item-wrap' v-show="!item.isHide">
                            <div :class="{item:true, active:item2.active}" v-for="(item2,index2) in item.param" :key="index2" @click="SELECT_ATTR({index:index,index2:index2})">{{item2.title}}</div>
                        </div>
                    </div>
                    <div style='width:100%;height:1px;backgroundColor:#EFEFEF'></div>
                </div>
                <div style='width:100%;height:1.2rem'></div>
            </div>
            <div class='handel-wrap'>
                <div class='item'>共<span>{{total}}</span>件</div>
                <div class='item reset' @click="resetScreen()">全部重置</div>
                <div class='item sure' @click="sureSubmit()">确定</div>
            </div>
        </div>
        <my-search :show="searchShow" :isLocal="true"></my-search>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import MySearch from '../../../components/search';
import IScroll from '../../../assets/js/libs/iscroll';
import UpRefresh from '../../../assets/js/libs/uprefresh';
export default {
    name:"goods-search",
    data() {
        return {
            keyword: this.$route.query.keyword ? this.$route.query.keyword : '',
            searchShow:{show:false},
            isPriceOrder:false,
            priceOrderList:[
                {otype:"all",title:"综合",active:true},
                {otype:"up",title:"价格从低到高",active:false},
                {otype:"down",title:"价格从高到低",active:false}
            ],
            isSalesOrder:false,
            isScreen:false,
            isClassify:false
        }
    },
    created(){
        this.otype="all";
        this.pullUp=new UpRefresh();
        this.getClassify({success:()=>{
            this.$nextTick(()=>{
                this.myScroll.refresh();
            })
        }})
        this.resetScreen();
        this.init();
        this.getAttrs({keyword:this.keyword,success:()=>{
            this.$nextTick(()=>{
                this.myScroll.refresh();
            })
        }})
    },
    mounted() {
        this.$refs['screen'].addEventListener("touchmove",this.disableScreenTochmove);
        this.myScroll=new IScroll(this.$refs['screen'],{
            scrollX:false,
            scrollY:true,
            preventDefault:false
        })
    },
    components:{
        MySearch
    },
    computed:{
        ...mapState({
            classifys:state=>state.goods.classifys,
            priceData:state=>state.search.priceData,
            minPrice:state=>state.search.minPrice,
            maxPrice:state=>state.search.maxPrice,
            attrs:state=>state.search.attrs,
            searchData:state=>state.search.searchData,
            cid:state=>state.search.cid,
            attrs:state=>state.search.attrs,
            params:state=>state.search.params,
            total:state=>state.search.total
        })
    },
    methods:{
        ...mapActions({
            getClassify:"goods/getClassify",
            selectClassify:"search/selectClassify",
            getSearch:"search/getSearch",
            getSearchPage:"search/getSearchPage",
            getAttrs:"search/getAttrs",
            resetScreen:"search/resetScreen"
        }),
        ...mapMutations({
            "HIDE_PRICE":"search/HIDE_PRICE",
            SELECT_PRICE:"search/SELECT_PRICE",
            SET_MINPRICE:"search/SET_MINPRICE",
            SET_MAXPRICE:"search/SET_MAXPRICE",
            HIDE_ATTR:"search/HIDE_ATTR",
            SELECT_ATTR:"search/SELECT_ATTR",
            SET_PARAMS:"search/SET_PARAMS"
        }),
        selectPrice() {
            this.isPriceOrder = !this.isPriceOrder;
        },
        init() {
            let jsonParams = {keyword:this.keyword,otype:this.otype,cid:this.cid,price1:this.minPrice,price2:this.maxPrice,param:JSON.stringify(this.params)};
            this.getSearch({...jsonParams,success:(pageNum)=>{
                this.$nextTick(()=>{
                    this.$utils.lazyImg();
                });
                this.pullUp.init({"curPage":1,"maxPage":parseInt(pageNum),"offsetBottom":100},(page)=>{
                    this.getSearchPage({...jsonParams,page:page})
                })
            }})
        },
        selectPriceOrder(index) {
            if(this.priceOrderList.length>0){
                for(let i = 0; i < this.priceOrderList.length; i++) {
                    if(this.priceOrderList[i].active){
                        this.priceOrderList[i].active=false;
                        break;
                    }
                }
                this.priceOrderList[index].active=true;
                this.$set(this.priceOrderList,index,this.priceOrderList[index]);
                this.isSalesOrder=false;
                this.otype=this.priceOrderList[index].otype;
                this.init();
            }
        },
        selectSales(){
            this.isSalesOrder=true;
            this.isPriceOrder=false;
            for(let i=0;i<this.priceOrderList.length;i++){
                if(this.priceOrderList[i].active){
                    this.priceOrderList[i].active=false;
                    break;
                }
            }
            this.otype="sales";
            this.init();
        },
        disableScreenTochmove(e){
            e.preventDefault();
        },
        sureSubmit(){
            this.isScreen=false;
            this.SET_PARAMS();
            this.init();
        }
    },
    beforeRouteUpdate(to,from,next) {
        this.keyword=to.query.keyword;
        this.isPriceOrder=false;
        if(this.priceOrderList.length>0){
            for(let i=0;i<this.priceOrderList.length;i++){
                if(this.priceOrderList[i].active){
                    this.priceOrderList[i].active=false;
                    break;
                }
            }
        }
        this.priceOrderList[0].active=true;
        this.otype="all";
        this.isSalesOrder=false;
        this.resetScreen();
        this.init();
        this.getAttrs({keyword:this.keyword,success:()=>{
            this.$nextTick(()=>{
                this.myScroll.refresh();
            })
        }})
        next();
    },
    beforeDestroy(){
        this.$refs['screen'].removeEventListener("touchmove",this.disableScreenTochmove);
        this.pullUp.uneventSrcoll();
    }
}
</script>

<style scoped>
    .page {
        width: 100%;
        height: auto;
        background-color: #FFFFFF;
        overflow: hidden;
    }

    .search-top {
        width: 100%;
        position: fixed;
        z-index: 10;
        left: 0px;
        top: 0px;
        background-color: #FFFFFF;
    }

    .search-header {
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #EFEFEF;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center
    }

    .search-header .back {
        width: 0.8rem;
        height: 0.8rem;
        background-image: url('../../../assets/images/home/goods/back.png');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .search-header .search-wrap {
        width: 75%;
        background: #EAEAEA;
        height: 80%;
        border-radius: 0.1rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .search-header .search-wrap .search-icon {
        width: 0.5rem;
        height: 0.5rem;
        background-image: url("../../../assets/images/common/search.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        margin-left: 0.1rem;
        margin-right: 0.2rem;
    }

    .search-header .search-wrap .search-text {
        width: 90%;
        height: auto;
        font-size: 0.32rem;
    }

    .search-header .screen-btn {
        width: auto;
        height: auto;
        font-size: 0.32rem;
        margin-right: 0.1rem;
    }

    .search-top .order-main {
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #EFEFEF;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .search-top .order-main .order-item {
        width: auto;
        height: auto;
        display: flex;
        display: -webkit-flex;
        margin-left: 0.4rem;
        position: relative;
        z-index: 1;
    }

    .search-top .order-main .order-item .order-text {
        font-size: 0.32rem;
    }

    .search-top .order-main .order-item.active .order-text {
        color: #FDA208
    }

    .search-top .order-main .order-item .order-icon {
        width: 0.35rem;
        height: 0.35rem;
        background-image: url("../../../assets/images/home/goods/down.png");
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        margin-left: 0.1rem;
    }

    .search-top .order-main .order-item.active .order-icon {
        background-image: url("../../../assets/images/home/goods/up.png");
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    /*.search-top .order-main .order-item .order-icon.up{background-image:url("../../../../assets/images/home/goods/up.png");background-size:100%;background-position: center;background-repeat: no-repeat;}*/
    .search-top .order-main .order-item .order-menu {
        width: 688%;
        height: auto;
        background-color: #FFFFFF;
        position: absolute;
        z-index: 1;
        left: -35%;
        top: 0.63rem;
    }

    .search-top .order-main .order-item .order-menu li {
        width: 95%;
        height: 0.8rem;
        border-bottom: 1px solid #EFEFEF;
        font-size: 0.28rem;
        line-height: 0.8rem;
        padding-left: 0.4rem;
    }

    .search-top .order-main .order-item .order-menu li.active {
        color: #FDA208
    }

    .goods-main {
        width: 100%;
        height: auto;
        margin-top: 2rem;
    }

    .goods-main .goods-list {
        width: 100%;
        height: 2rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        overflow: hidden;
        margin-bottom: 0.4rem;
    }

    .goods-main .goods-list .image {
        width: 2rem;
        height: 2rem;
        margin-left: 0.1rem;
        overflow: hidden;
        text-align: center;
    }

    .goods-main .goods-list .image img {
        width: auto;
        height: auto;
        max-height: 100%;
        max-height: 100%;
    }

    .goods-main .goods-list .goods-content {
        width: 67%;
        height: 98%;
        border-bottom: solid 1px #cccccc;
    }

    .goods-main .goods-list .goods-title {
        width: 95%;
        height: 0.8rem;
        font-size: 0.28rem;
        overflow: hidden;
    }

    .goods-main .goods-list .price {
        font-size: 0.32rem;
        color: #F93036;
        margin-top: 0.1rem;
    }

    .goods-main .goods-list .sales {
        font-size: 0.24rem;
        color: #969696;
        margin-top: 0.1rem;
    }

    .goods-main .goods-list .sales span {
        color: #FDA208
    }

    .mask {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 99;
        left: 0px;
        top: 0px;
        background-color: rgba(0, 0, 0, 0.3)
    }

    .screen {
        width: 80%;
        height: 100%;
        position: fixed;
        z-index: 100;
        right: 0px;
        top: 0px;
        background-color: #FFFFFF;
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
        overflow: hidden;
    }

    .screen.move {
        transition: transform 0.3s;
        -webkit-transition: transform 0.3s;
        transform: translateX(0%);
        -webkit-transform: translateX(0%)
    }

    .screen.unmove {
        transition: transform 0.3s;
        -webkit-transition: transform 0.3s;
        transform: translateX(100%);
        -webkit-transform: translateX(100%)
    }

    .screen .attr-wrap {
        width: 100%;
    }

    .screen .attr-wrap .attr-title-wrap {
        width: 94%;
        height: 0.8rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }

    .screen .attr-wrap .attr-title-wrap .attr-name {
        font-size: 0.32rem;
    }

    .screen .attr-wrap .attr-title-wrap .attr-icon {
        width: 0.4rem;
        height: 0.4rem;
        background-image: url("../../../assets/images/home/goods/down.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .screen .attr-wrap .attr-title-wrap .attr-icon.up {
        background-image: url("../../../assets/images/home/goods/up.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .screen .attr-wrap .attr-title-wrap .price-wrap {
        width: auto;
        height: auto;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        margin-left: 18%;
    }

    .screen .attr-wrap .attr-title-wrap .price-wrap .price-input {
        width: 1rem;
        height: 0.4rem;
        border: 1px solid #EFEFEF
    }

    .screen .attr-wrap .attr-title-wrap .price-wrap .price-input input {
        width: 100%;
        height: 89%;
        font-size: 0.28rem;
    }

    .screen .attr-wrap .attr-title-wrap .price-wrap .price-line {
        width: 0.4rem;
        height: 1px;
        background-color: #EFEFEF;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }

    .screen .attr-wrap .item-wrap {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
    }

    .screen .attr-wrap .item-wrap .item {
        width: 30%;
        height: 0.64rem;
        background-color: #EFEFEF;
        text-align: center;
        line-height: 0.64rem;
        overflow: hidden;
        font-size: 0.28rem;
        border-radius: 0.1rem;
        margin-left: 2%;
        margin-right: 1%;
        margin-bottom: 0.2rem;
    }

    .screen .attr-wrap .item-wrap .item.active {
        color: #FFFFFF;
        background-color: #FDA208;
    }

    .screen .handel-wrap {
        width: 100%;
        height: 1rem;
        background-color: #FFFFFF;
        border-top: 1px solid #EFEFEF;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: 0px;
        display: flex;
        display: -webkit-flex;
    }

    .screen .handel-wrap .item {
        width: auto;
        height: 100%;
        font-size: 0.28rem;
        text-align: center;
        line-height: 1rem;
        flex: 1;
        -webkit-flex: 1
    }

    .screen .handel-wrap .item span {
        color: #FDA208
    }

    .screen .handel-wrap .item.reset {
        background-color: #EFEFEF
    }

    .screen .handel-wrap .item.sure {
        background-color: #FDA208;
        color: #FFFFFF
    }
</style>