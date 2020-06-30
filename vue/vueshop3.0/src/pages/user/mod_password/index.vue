<template>
    <div class="page">
        <SubHeader title="修改密码"></SubHeader>
        <div class='main'>
            <div class='input-wrap' style="margin-top:0.3rem">
                <input :type="isOpen?'text':'password'" placeholder="请输入不小于6位的密码" class='password' v-model="password" />
                <div class='switch-wrap'>
                    <van-switch v-model="isOpen" active-color="#EB1625" />
                </div>
            </div>
            <div class='save-btn' @click="submit">提交</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Toast,Switch} from "vant";
    import {mapActions} from "vuex";
    import SubHeader from "../../../components/sub_header";
    Vue.use(Switch);
    export default {
        name: "mod-password",
        data(){
            return {
                isOpen:false,
                password:""
            }
        },
        components:{
            SubHeader
        },
        mounted(){
            document.title=this.$route.meta.title;
        },
        created(){
            this.$utils.safeUser(this);
        },
        methods:{
            ...mapActions({
                updatePassword:"user/updatePassword"
            }),
            submit(){
                if(this.password.match(/^\s*$/)){
                    Toast("请输入密码");
                    return;
                }
                if(this.password.length<6){
                    Toast("密码不能小于6位");
                    return;
                }
                this.updatePassword({password:this.password,success:(res)=>{
                        if(res.code===200){
                            this.$router.go(-1);
                        }else{
                            Toast(res.data);
                        }
                    }});
            }
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
        padding-top: 1.02rem;
    }

    .main .tip {
        width: 100%;
        height: 1rem;
        background-color: #F3F5C4;
        color: #ac7700;
        font-size: 0.28rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .main .tip .icon {
        width: 0.4rem;
        height: 0.4rem;
        background-image: url("../../../assets/images/user/mobile/tip.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 0.4rem;
        margin-right: 0.2rem;
    }

    .main .tip .text {
        width: auto;
        height: auto;
    }

    .main .input-wrap {
        width: 93%;
        height: 0.8rem;
        border: #c5cbcf solid 1px;
        border-radius: 4px;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        display: -webkit-flex;
    }

    .main .input-wrap .password {
        width: 75%;
        height: 100%;
        margin-left: 0.2rem;
        font-size: 0.28rem;
    }

    .main .input-wrap .switch-wrap {
        width: 20%;
        margin-top: 0.1rem;
    }

    .main .save-btn {
        width: 93%;
        height: 0.8rem;
        background-color: #E42321;
        font-size: 0.28rem;
        color: #FFFFFF;
        text-align: center;
        line-height: 0.8rem;
        margin: 0 auto;
        border-radius: 4px;
        margin-top: 0.2rem;
    }
</style>