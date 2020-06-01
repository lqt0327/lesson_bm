import React,{lazy,Suspense} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
const IndexComponent = lazy(()=>import('./pages/home/index/index'));

export default class RouterComponent extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Suspense fallback={<React.Fragment></React.Fragment>} >
              <Switch>
                <Route exact path="/" component={IndexComponent} ></Route>
              </Switch>
            </Suspense>
          </React.Fragment>
        </Router>
      </React.Fragment>
    )
  }
}

