<template>
    <div class="search-component" v-show="show.show">
        <div class='search-header'>
            <div class='close' @click="show.show=false"></div>
            <div class='search-wrap'>
                <div class='search-input-wrap'>
                    <input type="text" class='search' placeholder="请输入宝贝名称" v-model="keyword" />
                </div>
                <button type="button" class='search-btn' @click="goSearch()"></button>
            </div>
        </div>
        <div class="search-main">
            <div class="search-title-wrap">
                <div class="search-title">最近搜索</div>
                <div class="bin"></div>
            </div>
            <div class="search-keywords-wrap">
                <div class="keywords">连衣裙</div>
            </div>
        </div>
        <div class="search-main">
            <div class="search-title-wrap">
                <div class="search-title">热门搜索</div>
            </div>
            <div class="search-keywords-wrap">
                <div class="keywords">连衣裙</div>
                <div class="keywords">电脑</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"my-search",
    data() {
        return {
            keyword:""
        }
    },
    props:{
        show:{
            type:Object,
            default:{}
        }
    },
    methods:{
        goSearch() {}
    }
}
</script>

<style scoped>
    .search-component{width:100vw;height:100vh;position: fixed;z-index:99;left:0px;top:0px;background-color:#ffffff;}
    .search-component .search-header{width:100%;height:1rem;border-bottom:#EFEFEF solid 1px;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
    .search-component .search-header .close{width:0.5rem;height: 0.5rem;background-image:url("../../assets/images/common/search_x.png");background-size:100%;background-repeat: no-repeat;background-position: center;margin-left:0.2rem;margin-right:0.2rem;}
    .search-component .search-header .search-wrap{width:78%;height:0.64rem;border:#B2B2B2 solid 1px;border-radius: 0.1rem;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
    .search-component .search-header .search-wrap .search-input-wrap{width:85%;height:100%;border-right: #B2B2B2 solid 1px;}
    .search-component .search-header .search-wrap .search{width:80%;height:93%;margin-left:0.2rem;font-size:0.28rem;}
    .search-component .search-header .search-wrap .search-btn{width:0.5rem;height:0.5rem;background-image:url("../../assets/images/common/search_icon.png");background-size:100%;background-repeat: no-repeat;background-position: center;background-color:#ffffff;border:0px none;outline: none;margin-left:0.15rem;}

    .search-component .search-main{width:100%;margin-top:0.2rem;}
    .search-component .search-main .search-title-wrap{width:auto;display:flex;display:-webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;padding-left:0.4rem;padding-right:0.4rem;}
    .search-component .search-main .search-title-wrap .search-title{width:auto;font-size:0.28rem;}
    .search-component .search-main .search-title-wrap .bin{width:0.4rem;height:0.4rem;background-image:url('../../assets/images/common/bin.png');background-size:100%;background-repeat: no-repeat;background-position: center;}
    .search-component .search-main .search-keywords-wrap{width:auto;display:flex;display:-webkit-flex;justify-content: flex-start;-webkit-justify-content: flex-start;padding-left:0.4rem;padding-right:0.4rem;margin-top:0.3rem;flex-wrap: wrap;-webkit-flex-wrap: wrap;}
    .search-component .search-main .search-keywords-wrap .keywords{width:26%;height:0.6rem;color:#717376;border:#EFEFEF solid 1px;border-radius: 0.64rem;font-size:0.28rem;text-align: center;overflow:hidden;line-height:0.6rem;margin-right:1.3%;margin-left:1.3%;margin-bottom:0.2rem;padding-left:0.1rem;padding-right:0.1rem;}

</style>