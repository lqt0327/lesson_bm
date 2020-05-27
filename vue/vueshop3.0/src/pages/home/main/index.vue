<template>
  <div>
    <router-view></router-view>
    <div class="bottom-nav">
      <ul :class="{home:true, active:homeStyle}" @click="goPage('/index')">
          <li></li>
        <li>首页</li>
      </ul>
      <ul :class="{cart:true, active:cartStyle}" @click="goPage('/cart')">
          <li></li>
        <li>购物车</li>
      </ul>
      <ul :class="{my:true, active:myStyle}" @click="goPage('/my')">
          <li></li>
        <li>我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      homeStyle:true,
      cartStyle:false,
      myStyle:false,
    };
  },
  created() {
    // console.log(this.$router);
    document.title=this.$route.meta.title;
    this.changeStyleNav(this.$route.name);
  },
  methods:{
      goPage(url) {
          this.$router.replace(url).catch(err => {err});
      },
      changeStyleNav(name) {
        switch(name) {
          case 'index':
            this.homeStyle=true;
            this.cartStyle=false;
            this.myStyle=false;
            break;
          case 'cart':
            this.homeStyle=false;
            this.cartStyle=true;
            this.myStyle=false;
            break;
          case 'my':
            this.homeStyle=false;
            this.cartStyle=false;
            this.myStyle=true;
            break;
          default:
            this.homeStyle=true;
            this.cartStyle=false;
            this.myStyle=false;
            break;
        }
      }
  },
  beforeRouteUpdate(to, from, next) {
    document.title=to.meta.title;
    this.changeStyleNav(to.name);
    next();
  },
  //在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等
  activated() {
    document.title=this.$route.meta.title;
    this.changeStyleNav(this.$route.name);
  }
};
</script>

<style scoped>
  .bottom-nav {position: fixed; bottom: 0; display: flex;justify-content: space-between;align-items: center; width: 100vw; height: 1.2rem; padding: 0 .5rem; box-sizing: border-box;background-color:#FFFFFF;box-shadow: 0 0 10px #efefef;}
  .bottom-nav ul li{width: 1rem; position: relative;}
  .bottom-nav ul li:nth-child(1) {width: 0.6rem; height: 0.6rem; margin: 0 auto;}
  .bottom-nav ul li:nth-child(2) {font-size: .28rem;text-align: center;}
  .bottom-nav ul.active li:nth-child(2) {color:#eb1625}

  .bottom-nav ul.home li:nth-child(1) {background-image:url("../../../assets/images/home/main/home1.png");background-size: 100%; background-repeat: no-repeat; background-position: center;}
  .bottom-nav ul.home.active li:nth-child(1){background-image:url("../../../assets/images/home/main/home2.png");background-size:100%;background-repeat: no-repeat;background-position: center}

  .bottom-nav ul.cart li:nth-child(1) {background-image:url("../../../assets/images/home/main/cart1.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
  .bottom-nav ul.cart.active li:nth-child(1){background-image:url("../../../assets/images/home/main/cart2.png");background-size:100%;background-repeat: no-repeat;background-position: center}

  .bottom-nav ul.my li:nth-child(1){background-image:url("../../../assets/images/home/main/my1.png");background-size:100%;background-repeat: no-repeat;background-position: center}
  .bottom-nav ul.my.active li:nth-child(1){background-image:url("../../../assets/images/home/main/my2.png");background-size:100%;background-repeat: no-repeat;background-position: center}
</style>
