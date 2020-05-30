import React,{lazy,Suspense} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import config from '../../assets/js/conf/config';
import GoodsNav from '../../components/goodsNav';
const GoodsItem=lazy(()=>import("./item"));
const GoodsDetails=lazy(()=>import("./details"));
const GoodsReview=lazy(()=>import("./review"));
class Index extends React.Component {

    render() {
        return (
            <div>
                <button type="button" onClick={this.props.history.go.bind(this,-1)}>返回</button>
                <GoodsNav></GoodsNav>
                <div>
                    <Switch>
                        <Suspense fallback={<React.Fragment/>}>
                            <Route path={config.path+"goods/item"} component={GoodsItem}></Route>
                            <Route path={config.path+"goods/details"} component={GoodsDetails}></Route>
                            <Route path={config.path+"goods/review"} component={GoodsReview}></Route>
                            <Redirect to={config.path+"goods/item"}></Redirect>
                        </Suspense>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Index;