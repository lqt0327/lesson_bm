<template>
    <div class="page">
        <SubHeader title="绑定手机"></SubHeader>
        <div class='main'>
            <div class='tip'>
                <div class='icon'></div>
                <div class='text'>新手机号验证后，即可绑定成功！</div>
            </div>
            <div class='input-wrap' style="margin-top:0.5rem">
                <input type="tel" class='cellphone' @input="checkCellphone" placeholder='绑定手机号' v-model="cellphone" />
            </div>
            <div class='input-wrap' style="margin-top:0.2rem">
                <input type="text" class='code' placeholder='请输入短信验证码' v-model="msgCode" />
                <div :class="{'code-btn':true, success:isSendMsgCode}" @click="getMsgCode">{{msgCodeText}}</div>
            </div>
            <div class='save-btn' @click="submit">下一步</div>
        </div>
    </div>
</template>

<script>
    import {Toast} from "vant";
    import {mapActions} from "vuex";
    import SubHeader from "../../../components/sub_header";
    export default {
        name: "bind-cellphone",
        data(){
            return {
                cellphone:"",
                msgCode:"",
                isSendMsgCode:false,
                msgCodeText:"获取验证码"
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
            this.timer=null;
            this.isSubmit=true;
        },
        methods:{
            ...mapActions({
                isReg:"user/isReg",
                updateCellphone:"user/updateCellphone"
            }),
            //获取短信验证码
            async getMsgCode(){
                if(this.isSendMsgCode){
                    if(this.cellphone.match(/^\s*$/)){
                        Toast("请输入手机号");
                        return;
                    }
                    if(!this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){
                        Toast("您输入的手机号格式不正确");
                        return;
                    }
                    let regData=await this.isReg({username:this.cellphone});
                    if(regData.data.isreg==='1'){
                        Toast("此手机号已注册过，请更换手机号");
                        return;
                    }
                    this.isSendMsgCode=false;
                    let time=10;
                    this.msgCodeText="重新获取("+time+")";
                    this.timer=setInterval(()=>{
                        if(time>0){
                            time--;
                            this.msgCodeText="重新获取("+time+")";
                        }else{
                            clearInterval(this.timer);
                            this.msgCodeText="获取短信验证码";
                            this.isSendMsgCode=true;
                        }
                    },1000)
                }
            },
            checkCellphone(){
                let isChecked=true;
                if(this.cellphone.match(/^\s*$/)){
                    isChecked=false;
                }
                if(!this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){
                    isChecked=false;
                }
                if(isChecked){
                    this.isSendMsgCode=true;
                }else{
                    this.isSendMsgCode=false;
                }
            },
            //修改手机号
            async submit(){
                if(this.cellphone.match(/^\s*$/)){
                    Toast("请输入手机号");
                    return;
                }
                if(!this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){
                    Toast("您输入的手机号格式不正确");
                    return;
                }
                let regData=await this.isReg({username:this.cellphone});
                if(regData.data.isreg==='1'){
                    Toast("此手机号已注册过，请更换手机号");
                    return;
                }
                if(this.msgCode.match(/^\s*$/)){
                    Toast("请输入短信验证码");
                    return;
                }
                if(this.isSubmit){
                    this.isSubmit=false;
                    this.updateCellphone({cellphone:this.cellphone,vcode:this.msgCode,success:(res)=>{
                            if(res.code===200){
                                this.$router.go(-1);
                            }else{
                                Toast(res.data);
                            }
                        }})
                }

            },
        },
        beforeDestroy(){
            clearInterval(this.timer);
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
    }

    .main .input-wrap .cellphone {
        width: 93%;
        height: 90%;
        font-size: 0.28rem;
        margin-left: 0.2rem;
        margin-top: 0.05rem;
    }

    .main .input-wrap .code {
        width: 69%;
        height: 90%;
        font-size: 0.28rem;
        margin-left: 0.2rem;
        margin-top: 0.05rem;
        float: left;
    }

    .main .input-wrap .code-btn {
        width: 27%;
        height: 100%;
        border-left: #EFEFEF 1px solid;
        float: left;
        font-size: 0.28rem;
        color: #717376;
        text-align: center;
        line-height: 0.8rem;
    }

    .main .input-wrap .code-btn.success {
        color: #EB1625
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