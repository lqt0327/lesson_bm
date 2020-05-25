/*
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/
import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {AuthRoute} from './routes/private';
import config from './assets/js/conf/config';
const IndexPage=lazy(()=>import("./pages/index"));
const NewsPage=lazy(()=>import("./pages/news"));
const NewsDetailsPage=lazy(()=>import("./pages/news/details"));
const GoodsPage=lazy(()=>import("./pages/goods"));
const LoginPage=lazy(()=>import("./pages/login"));
const UserPage=lazy(()=>import("./pages/user"));
class RouterComponent extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Suspense fallback={<React.Fragment/>}>
                                <Route path={config.path} exact component={IndexPage}></Route>
                                <Route path={config.path+"news"} exact component={NewsPage}></Route>
                                {/*<Route path="/news/details/:id/:title" component={NewsDetailsPage}></Route>*/}
                                <Route path={config.path+"news/details"} component={NewsDetailsPage}></Route>
                                <Route path={config.path+"goods"} component={GoodsPage}></Route>
                                <Route path={config.path+"login"} component={LoginPage}></Route>
                                <AuthRoute path={config.path+"user"} component={UserPage}></AuthRoute>
                            </Suspense>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default RouterComponent;
