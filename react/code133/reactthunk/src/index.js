import 'url-search-params-polyfill'; //使用URLSearchParams兼容IE
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/reducers';
import './assets/css/common/public.css';
import RouterComponent from './router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

function App() {
    return (
        <React.Fragment>
            {/*将仓库的值分配到所有组件*/}
            <Provider store={store}>
                <RouterComponent></RouterComponent>
            </Provider>
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
