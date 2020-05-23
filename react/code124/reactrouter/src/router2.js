/*
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/
import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import asyncComponent from './components/async/asyncComponent';
const IndexPage=asyncComponent(()=>import("./pages/index"));
const NewsPage=asyncComponent(()=>import("./pages/news"));
const NewsDetailsPage=asyncComponent(()=>import("./pages/news/details"));
class RouterComponent extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Route path="/" exact component={IndexPage}></Route>
                        <Route path="/news" exact component={NewsPage}></Route>
                        {/*<Route path="/news/details/:id/:title" component={NewsDetailsPage}></Route>*/}
                        <Route path="/news/details" component={NewsDetailsPage}></Route>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default RouterComponent;
