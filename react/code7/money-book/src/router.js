import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import IndexPage from "./pages/index";
import NewsPage from "./pages/news";
import NewsDetailsPage from "./pages/news/details";

class RouterComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Route path="/" exact component={IndexPage} ></Route>
                        <Route path="/news" exact component={NewsPage} ></Route>
                        <Route path="/news/details" component={NewsDetailsPage}></Route>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default RouterComponent;