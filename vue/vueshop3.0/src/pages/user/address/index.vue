<template>
    <div class="page">
        <SubHeader title="收货管理"></SubHeader>
        <div class='main'>
            <div class='list' v-for="(item,index) in address" :key="index" @click="$router.push('/user/address/mod?aid='+item.aid)">
                <div class='name-wrap'>
                    <span>{{item.name}}</span><span>{{item.cellphone}}</span>
                </div>
                <div class='address'>
                    <span v-if="item.isdefault==='1'">[默认]</span>{{item.province}}{{item.city}}{{item.area}}{{item.address}}
                </div>
                <div class='right-arrow'></div>
            </div>
            <div style="width:100%;height:1.3rem;"></div>
        </div>
        <div class='add-btn' @click="$router.push('/user/address/add')">+ 添加新地址</div>
    </div>
</template>

<script>
    import {mapActions,mapState} from "vuex";
    import SubHeader from "../../../components/sub_header";
    export default {
        components:{
            SubHeader
        },
        created(){
            this.$utils.safeUser(this);
            this.getAddress();
        },
        mounted(){
            document.title=this.$route.meta.title;
        },
        computed:{
            ...mapState({
                address:state=>state.address.address
            })
        },
        methods:{
            ...mapActions({
                getAddress:"address/getAddress"
            })
        }
    }
</script>

<style scoped>
    .page{width:100%;min-height:100vh;background-color:#FFFFFF;overflow: hidden;}
    .main{width:100%;margin-top:1.02rem;}
    .list{width:100%;height:1.2rem;border-bottom: #EFEFEF 1px solid;position: relative;z-index:1;}
    .list .name-wrap{width:auto;height:auto;position:absolute;left:3%;top:0.2rem;z-index:1;font-size:0.28rem;}
    .list .name-wrap span{padding-right:0.3rem;}
    .list .address{width:auto;height:auto;font-size:0.24rem;position: absolute;z-index:1;left:3%;top:0.7rem;}
    .list .address span{color:#FDB709}
    .list .right-arrow{width:0.3rem;height:0.3rem;background-image: url("../../../assets/images/common/right_arrow.png");background-size:100%;background-repeat:no-repeat;background-position: center;position:absolute;z-index:1;right:3%;top:0.45rem;}

    .add-btn{width:80%;height:0.8rem;background-color:#EB1625;position: fixed;z-index:2;bottom:0.4rem;left:50%;border-radius: 4px;transform: translateX(-50%);-webkit-transform: translateX(-50%);color:#FFFFFF;font-size:0.28rem;text-align:center;line-height:0.8rem;}
</style>
