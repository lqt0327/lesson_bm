<template>
    <div class="page">
        <SubHeader title="评价"></SubHeader>
        <div class='main'>
            <ul class='service' v-for="(item,index) in reviewServices" :key="index">
                <li>{{item.title}}</li>
                <li>
                    <div :class="{stars:true, active:item2.active}" v-for="(item2,index2) in item.scores" :key="index2" @click="SET_REVIEW_SCORE({index:index,index2:index2,score:item2.value})"></div>
                </li>
            </ul>
            <div class='content-wrap'>
                <textarea placeholder="来分享你的消费感受吧!" v-model="content"></textarea>
            </div>
            <button class='submit' type="button" @click="submit()">提交</button>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapState,mapMutations} from "vuex";
    import {Toast} from "vant";
    import SubHeader from "../../../components/sub_header";
    export default {
        name: "add-review",
        data(){
            return {
                content:""
            }
        },
        components:{
            SubHeader
        },
        created(){
            this.$utils.safeUser(this);
            this.gid=this.$route.query.gid?this.$route.query.gid:"";
            this.ordernum=this.$route.query.ordernum?this.$route.query.ordernum:'';
            this.isSubmit=true;
            this.getReviewService();
        },
        mounted(){
            document.title=this.$route.meta.title
        },
        computed:{
            ...mapState({
                reviewServices:state=>state.order.reviewServices,
                uid:state=>state.user.uid
            })
        },
        methods:{
            ...mapActions({
                getReviewService:"order/getReviewService",
                addReview:"order/addReview"
            }),
            ...mapMutations({
                SET_REVIEW_SCORE:"order/SET_REVIEW_SCORE"
            }),
            submit(){
                if(this.content.match(/^\s*$/)){
                    Toast("请输入评价内容");
                    return;
                }

                if(this.isSubmit){
                    this.isSubmit=false;
                    let rsdata=[];
                    if(this.reviewServices.length>0){
                        for(let i=0;i<this.reviewServices.length;i++){
                            rsdata.push({gid:this.gid,myid:this.uid,rsid:this.reviewServices[i].rsid,score:this.reviewServices[i].score})
                        }
                    }
                    this.addReview({gid:this.gid,content:this.content,ordernum:this.ordernum,rsdata:JSON.stringify(rsdata),success:(res)=>{
                            if(res.code===200){
                                this.$router.go(-1);
                            }else{
                                Toast(res.data);
                            }
                        }});
                }
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

    .service {
        width: 100%;
        height: 1rem;
        border-bottom: 1px solid #EFEFEF;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .service li:nth-child(1) {
        font-size: 0.32rem;
        margin-left: 3%;
        margin-right: 15%;
    }

    .service li:nth-child(2) {
        display: flex;
        display: -webkit-flex;
    }

    .service .stars {
        width: 0.4rem;
        height: 0.4rem;
        background-image: url("../../../assets/images/user/orders/stars1.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 0.3rem;
    }

    .service .stars.active {
        background-image: url("../../../assets/images/user/orders/stars2.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .content-wrap {
        width: 100%;
        height: 4rem;
        text-align: center;
        overflow: hidden;
    }

    .content-wrap textarea {
        width: 95%;
        height: 90%;
        font-size: 0.32rem;
        margin-top: 0.3rem;
        outline: none;
        border: 0 none;
        resize: none;
    }

    .submit {
        width: 90%;
        height: 0.8rem;
        background-color: #E51B19;
        font-size: 0.28rem;
        color: #FFFFFF;
        text-align: center;
        line-height: 0.8rem;
        border: 0 none;
        border-radius: 4px;
        outline: none;
        margin: 0 auto;
        display: block;
        margin-top: 0.3rem;
    }
</style>