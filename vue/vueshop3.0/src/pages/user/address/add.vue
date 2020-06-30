<template>
    <div class="page">
        <SubHeader title="添加收货地址"></SubHeader>
        <div class='main'>
            <ul>
                <li>收货人</li>
                <li><input type="text" placeholder="收货人姓名" v-model="name" /></li>
            </ul>
            <ul>
                <li>联系方式</li>
                <li><input type="text" placeholder="联系人手机号" v-model="cellphone" /></li>
            </ul>
            <ul>
                <li>所在地区</li>
                <li>
                    <input type="text" placeholder="请选择所在地区" class='area' readOnly :value="showArea" @click="isArea=true" />
                </li>
            </ul>
            <ul>
                <li>详细地址</li>
                <li><input type="text" placeholder="街道详细地址" v-model="address" /></li>
            </ul>
            <ul>
                <li>设置为默认地址</li>
                <li><input type="checkbox" v-model="isDefault"/></li>
            </ul>
            <button type="button" class='submit-save' @click="submit()">保存</button>
        </div>
        <van-popup v-model="isArea">
            <van-area :area-list="areaList" @cancel="isArea=false" @confirm="selectArea" />
        </van-popup>
    </div>
</template>

<script>
    import Vue from "vue";
    import {mapActions} from "vuex";
    import {Toast,Area,Popup} from "vant";
    import SubHeader from "../../../components/sub_header";
    import areaData from '../../../assets/data/area';
    Vue.use(Area);
    Vue.use(Popup);
    export default {
        name: "address-add",
        data(){
            return {
                name:"",
                cellphone:"",
                showArea:"",
                address:"",
                isDefault:false,
                areaList:areaData,
                isArea:false,
                province:"",
                city:"",
                area:""
            }
        },
        created(){
            this.$utils.safeUser(this);
            this.isSubmit=true;
        },
        mounted(){
            document.title=this.$route.meta.title;
        },
        components:{
            SubHeader
        },
        methods:{
            ...mapActions({
                addAddress:"address/addAddress"
            }),
            submit(){
                if(this.name.match(/^\s*$/)){
                    Toast("请输入收货人姓名");
                    return;
                }
                if(this.cellphone.match(/^\s*$/)){
                    Toast("请输入联系人手机号");
                    return;
                }
                if(!this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){
                    Toast("您输入的手机号格式不正确");
                    return;
                }
                if(this.showArea.match(/^\s*$/)){
                    Toast("请选择所在地区");
                    return;
                }
                if(this.address.match(/^\s*$/)){
                    Toast("请输入详细地址");
                    return;
                }
                if(this.isSubmit){
                    this.isSubmit=false;
                    this.addAddress({name:this.name,cellphone:this.cellphone,province:this.province,area:this.area,city:this.city,address:this.address,isdefault:this.isDefault?"1":"0",success:(res)=>{
                            if(res.code===200){
                                Toast({
                                    duration:2000,
                                    message:"添加成功！",
                                    onClose:()=>{
                                        this.$router.go(-1);
                                    }
                                })
                            }
                        }})
                }

            },
            //选择所在地区
            selectArea(val){
                this.isArea=false;
                let tmpVal=[];
                if(val.length>0){
                    for(let i=0;i<val.length;i++){
                        tmpVal.push(val[i].name);
                    }
                    this.province=tmpVal[0];
                    this.city=tmpVal[1];
                    this.area=tmpVal[2];
                }
                this.showArea=tmpVal.join(" ");
            }
        }
    }
</script>

<style scoped>
    .page{width:100%;height:100vh;overflow:hidden;background-color:#FFFFFF;}
    .main{width:100%;margin-top:1rem;}
    .main ul{width:100%;height:1.02rem;border-bottom: #EFEFEF 1px solid;display: flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
    .main ul li{font-size:0.32rem;margin-left:0.3rem;}
    .main ul li:nth-child(2){width:62%;height:100%;}
    .main ul li input[type='text']{width:100%;height:95%;font-size:0.32rem;}
    .main ul li .area{font-size:0.28rem!important;}
    .main ul li input[type='checkbox']{width:0.4rem;height:0.4rem;margin-top:0.3rem;}
    .main .submit-save{width:85%;height:0.8rem;background-color:#FCB40A;border-radius: 4px;margin:0 auto;display:block;border:0 none;outline:none;font-size:0.32rem;color:#FFFFFF;margin-top:0.4rem;}
</style>
