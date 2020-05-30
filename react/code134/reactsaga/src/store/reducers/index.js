import { createStore, combineReducers,applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import counterReducer from './counter';
import userReducer from './user';
import homeReducer from './home';
import rootSaga from '../saga';

let saga = createSaga();

//存储到reducers里面 将reducers存储到仓库
let store = createStore(combineReducers({
    counter:counterReducer,
    user:userReducer,
    home:homeReducer,
}), applyMiddleware(saga));

saga.run(rootSaga);

export default store;