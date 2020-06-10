import React,{lazy,Suspense} from 'react';
import  {HashRouter as Router,Route,Switch,Redirect}  from  'react-router-dom';
import config from './assets/js/conf/config.js';
// import HomeComponent from './pages/home/home/index';
const HomeComponent = lazy(()=>import('./pages/home/home/index'));
const GoodsClassify = lazy(()=>import('./pages/home/goods/classify'));
// const GoodsSearch=asyncComponents(()=>import('./pages/home/goods/search'));
const GoodsDetails=lazy(()=>import('./pages/home/goods/details'));

export default class RouterComponent extends React.Component{
  render(){
      return(
        <React.Fragment>
          <Router>
            <React.Fragment>
              <Suspense fallback={<React.Fragment />}>
                <Switch>
                  <Route path={config.path+"home"} component={HomeComponent} ></Route>
                  <Route path={config.path+"goods/classify"} component={GoodsClassify} ></Route>
                  <Route path={config.path+"goods/details"} component={GoodsDetails} ></Route>
                  <Redirect to={config.path+"home/index"}></Redirect>
                </Switch>
              </Suspense>
            </React.Fragment>
          </Router>
        </React.Fragment>
      )
  }
}