<template>
    <div class="page">
        <div class="search-header">
            <div class="back"></div>
            <div class="search">请输入宝贝名称</div>
        </div>
        <div class="goods-main">
            <div class="classify-wrap">
                <div>
                    <div :class="{'classify-item':true, active:item.active}" v-for="(item,index) in classifys" :key="index">{{item.title}}</div>
                </div>
            </div>
            <div class="goods-content">
                <router-view></router-view>
            </div>
        </div>
        <my-search :show="searchShow"></my-search>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import MySearch from '../../../components/search';
export default {
    name:"classify",
    data() {
        return {
            searchShow:{show:false}
        }
    },
    components:{
        MySearch
    },
    created() {
        this.getClassify();
    },
    computed:{
        ...mapState({
            classifys:state=>state.goods.classifys,
        })
    },
    methods:{
        ...mapActions({
            getClassify:"goods/getClassify"
        })
    }
}
</script>

<style scoped>
    .page{width: 100%;height: 100vh;overflow: hidden;}
    .search-header{width: 100%;height: 1rem;background-color: #ffffff;display: flex;display: -webkit-flex;align-items: center;-webkit-align-items: center;border-bottom: 1px solid #EFEFEF;}
    .search-header .back{width:0.8rem;height:0.8rem;background-image: url("../../../assets/images/home/goods/back.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .search-header .search{width:80%;height:0.69rem;border:solid 1px #B2B2B2;border-radius: 0.1rem;font-size:0.28rem;color:#626262;line-height:0.69rem;padding-left:0.2rem;}

    .goods-main{width:100%;height:92.5vh;display:flex;display:-webkit-flex;}
    .goods-main .classify-wrap{width:1.72rem;height:100%;overflow:hidden;margin-right:3%;position:relative;z-index:1;}
    .goods-main .classify-wrap .classify-item{width:100%;height:0.8rem;border-bottom: 1px solid #EFEFEF;background-color:#FFFFFF;font-size:0.28rem;text-align: center;line-height:0.8rem;overflow:hidden;}
    .goods-main .classify-wrap .classify-item.active{color:#ff0000}
    .goods-main .goods-content{width:71%;height:100%;}
</style>