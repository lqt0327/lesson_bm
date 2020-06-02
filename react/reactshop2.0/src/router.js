import React,{lazy,Suspense} from 'react';
import  {HashRouter as Router,Route,Switch,Redirect}  from  'react-router-dom';
import config from './assets/js/conf/config.js';
// import HomeComponent from './pages/home/home/index';
const HomeComponent = lazy(()=>import('./pages/home/home/index'));

export default class RouterComponent extends React.Component{
  render(){
      return(
        <React.Fragment>
          <Router>
            <React.Fragment>
              <Suspense fallback={<React.Fragment />}>
                <Switch>
                  <Route path={config.path+"home"} component={HomeComponent} ></Route>
                  <Redirect to={config.path+"home/index"}></Redirect>
                </Switch>
              </Suspense>
            </React.Fragment>
          </Router>
        </React.Fragment>
      )
  }
}