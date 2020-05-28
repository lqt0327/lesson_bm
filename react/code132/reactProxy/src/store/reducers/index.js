import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counter';
import userReducer from './user';

//存储到reducers里面 将reducers存储到仓库
let store = createStore(combineReducers({
    counter:counterReducer,
    user:userReducer
}), applyMiddleware(thunk))

export default store;