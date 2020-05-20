import React,{lazy,Suspense} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
const IndexPage = lazy(() => import("./pages/index"));
const NewsPage = lazy(() => import("./pages/news"));
const NewsDetailsPage = lazy(() => import("./pages/news/details"));

class RouterComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Suspense fallback={<React.Fragment></React.Fragment>} >
                            <Route path="/" exact component={IndexPage} ></Route>
                            <Route path="/news" exact component={NewsPage} ></Route>
                            <Route path="/news/details" component={NewsDetailsPage}></Route>
                        </Suspense>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default RouterComponent;