import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import './assets/css/common/public.css';
import RouterComponent from './router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

//获取index.js里面dispatch的值
function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "INC":
            return { ...state, ...action.data };
        case "DEC":
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

let defaultState={
    username:localStorage['username']?localStorage['username']:"",
    isLogin:localStorage['isLogin']?Boolean(localStorage['isLogin']):false
};

function userReducer(state=defaultState, action) {
    switch(action.type) {
        case "LOGIN":
            localStorage['username'] = action.data.username;
            localStorage['isLogin'] = true;
            return {...state, ...action.data};
        case "OUTLOGIN":
            localStorage.clear();
            return Object.assign({}, state, {username:"", isLogin: false});
        default:
            return state;
    }
}

//存储到reducers里面 将reducers存储到仓库
let store = createStore(combineReducers({
    counter:counterReducer,
    user:userReducer
}))

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
