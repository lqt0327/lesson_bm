import React,{lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import config from '../../../assets/js/conf/config';
import Css from '../../../assets/css/home/home/index.css';
// import IndexComponent from '../index/index';
const IndexComponent = lazy(()=>import('../index/index'));

class HomeComponent extends React.Component{
    render() {
        return (
            <div>
                <React.Fragment>
                    <Suspense fallback={<React.Fragment></React.Fragment>}>
                        <Switch>
                            <Route path={config.path+"home/index"} component={IndexComponent} ></Route>
                            {/* <Route path={config.path+"home/cart"} component={CartIndex} ></Route>
                            <Route path={config.path+"home/my"} component={UserIndex} ></Route> */}
                        </Switch>
                    </Suspense>
                </React.Fragment>
                <div className={Css['bottom-nav']}>
                    <ul>
                        <li className={Css['home']}></li>
                        <li className={Css['text']}>首页</li>
                    </ul>
                    <ul>
                        <li className={Css['cart']}></li>
                        <li className={Css['text']}>购物车</li>
                    </ul>
                    <ul>
                        <li className={Css['my']}></li>
                        <li className={Css['text']}>我的</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomeComponent;