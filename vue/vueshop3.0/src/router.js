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
                    component:()=>import("./pages/user/ucenter"),
                    meta:{keepAlive:false, title:"我的"}
                },
            ]
        },
        {
            path:"/login",
            name:"login",
            component:()=>import("./pages/home/login"),
            meta:{keepAlive:false}
        },
        {
            path:"/reg",
            name:"reg",
            component:()=>import("./pages/home/reg"),
            meta:{keepAlive:false}
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
        {
            path:"/goods/search",
            name:"goods-search",
            component:()=>import("./pages/home/goods/search")
        },
        {
            path:"/goods/details",
            name:"goods-details",
            component:()=>import("./pages/home/goods/details"),
            redirect:"goods/details/item",
            children:[
                {
                    path:"item",
                    name:"goods-item",
                    component:()=>import("./pages/home/goods/details_item")
                },
                {
                    path:"content",
                    name:"goods-content",
                    component:()=>import("./pages/home/goods/details_content")
                },
                {
                    path:"review",
                    name:"goods-review",
                    component:()=>import("./pages/home/goods/details_review")
                }
            ]
        },
        {
            path:"/user/order",
            name:"my-order",
            component:()=>import("./pages/user/order"),
            redirect:"/user/order/list",
            meta:{auth:true},
            children:[
                {
                    path:"list",
                    name:"order-list",
                    component:()=>import("./pages/user/order/list"),
                    meta:{auth:true}
                },
                {
                    path:"review",
                    name:"order-review",
                    component:()=>import("./pages/user/order/review"),
                    meta:{auth:true}
                }
            ]
        }
    ]
});
router.beforeEach((to,from,next)=>{
    if(to.meta.auth){
        if(Boolean(localStorage['isLogin'])){
            next();
        }else{
            next("/login");
        }
    }else{
        next();
    }
})

export default router;