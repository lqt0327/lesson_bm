import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import asyncComponent from './components/async/asyncComponent';
const IndexPage = asyncComponent(() => import("./pages/index"));
const NewsPage = asyncComponent(() => import("./pages/news"));
const NewsDetailsPage = asyncComponent(() => import("./pages/news/details"));


class RouterComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Route path="/" exact component={IndexPage} ></Route>
                        <Route path="/news" component={NewsPage} ></Route>
                        <Route path="/news/details" component={NewsDetailsPage}></Route>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default RouterComponent;