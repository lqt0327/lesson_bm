import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    mode:"hash",
    base:process.env.BASE_URL,  //自动获取根目录路径
    routes:[
        {
            path:"/",
            name:"home",
            component:()=>import("./pages/home/main"),  //路由懒加载解决首屏加载慢，性能优化
            meta:{keepAlive:false},
            redirect:"/index",
            children:[
                {
                    path:"index",
                    name:"index",
                    component:()=>import("./pages/home/index"),
                    meta:{keepAlive:true, title:"商城"}
                },
                {
                    path:"cart",
                    name:"cart",
                    component:()=>import("./pages/home/cart"),
                    meta:{keepAlive:false, title:"购物车"}
                },
                {
                    path:"my",
                    name:"my",
                    component:()=>import("./pages/home/ucenter"),
                    meta:{keepAlive:false, title:"我的"}
                },
            ]
        },
        {
            path:"/goods/classify",
            name:"goods-classify",
            component:()=>import("./pages/home/goods/classify"),
            redirect:"/goods/classify/item",//页面重定向
            children:[
                {
                    path:"item",
                    name:"goods-classify-item",
                    component:()=>import("./pages/home/goods/classify_item"),
                    meta:{title:"商品分类"}
                }
            ]
        },
    ]
})

export default router;