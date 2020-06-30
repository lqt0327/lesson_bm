<template>
    <div class="page">
        <SubHeader title="我的收藏"></SubHeader>
        <div class='main'>
            <div class='goods-list' v-for="(item,index) in favs" :key="index">
                <div class='image'>
                    <img :data-echo="item.image" src="../../../assets/images/common/lazyImg.jpg" alt=""/>
                </div>
                <div class='title'>{{item.title}}</div>
                <div class='price'>¥{{item.price}}</div>
                <div class='btn-wrap'>
                    <div class='btn' @click="$router.push('/goods/details?gid='+item.gid)">购买</div>
                    <div class='btn' @click="delFav(index,item.fid)">删除</div>
                </div>
            </div>
        </div>
        <div class="no-data" v-show="false">您还没有收藏商品！</div>
    </div>
</template>

<script>
    import {mapActions,mapState} from "vuex"
    import UpRefresh from '../../../assets/js/libs/uprefresh';
    import SubHeader from "../../../components/sub_header";
    import {Dialog} from "vant";
    export default {
        name: "fav",
        components:{
            SubHeader
        },
        mounted(){
            document.title=this.$route.meta.title;
        },
        created(){
            this.$utils.safeUser(this);
            this.pullUp=new UpRefresh();
            this.getFav({page:1,success:(pageNum)=>{
                    this.$nextTick(()=> {
                        this.$utils.lazyImg();
                        this.pullUp.init({"curPage":1,"maxPage":parseInt(pageNum),"offsetBottom":100},(page)=>{
                            this.getFavPage({page:page,success:()=>{
                                    this.$utils.lazyImg();
                                }});
                        });
                    });
                }});
        },
        computed:{
            ...mapState({
                favs:state=>state.user.favs
            })
        },
        methods:{
            ...mapActions({
                getFav:"user/getFav",
                getFavPage:"user/getFavPage",
                asyncDelFav:"user/delFav"
            }),
            //删除收藏
            delFav(index,fid){
                Dialog.confirm({
                    title: '',
                    message: '确认要删除吗？'
                }).then(() => {
                    this.asyncDelFav({index:index,fid:fid,success:()=>{
                            this.$nextTick(()=>{
                                this.$utils.lazyImg();
                            })
                        }});
                }).catch(()=>{

                })
            }
        },
        beforeDestroy() {
            this.pullUp.uneventSrcoll();
        }
    }
</script>

<style scoped>
    .page {
        width: 100%;
        min-height: 100vh;
        background-color: #FFFFFF;
    }

    .main {
        width: 100%;
        padding-top: 1.2rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        box-sizing: border-box;
        padding-left: 2%;
        padding-right: 2%;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
    }

    .main .goods-list {
        width: 48%;
        height: 5.8rem;
        margin-bottom: 0.3rem;
        overflow: hidden;
    }

    .main .goods-list .image {
        width: 3.36rem;
        height: 3.35rem;
        margin: 0 auto;
    }

    .main .goods-list .image img {
        width: 100%;
        height: 100%;
        border: 0 none;
    }

    .main .goods-list .title {
        width: 100%;
        height: 0.8rem;
        overflow: hidden;
        font-size: 0.28rem;
        margin-top: 0.2rem;
    }

    .main .goods-list .price {
        font-size: 0.28rem;
        color: #F93036;
        margin-top: 0.2rem;
    }

    .main .goods-list .btn-wrap {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        margin-top: 0.2rem;
    }

    .main .goods-list .btn-wrap .btn {
        width: 1.04rem;
        height: 0.52rem;
        border: 1px solid #F93036;
        font-size: 0.28rem;
        color: #F93036;
        border-radius: 4px;
        text-align: center;
        line-height: 0.52rem;
    }
</style>