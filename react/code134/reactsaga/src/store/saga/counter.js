/*eslint-disable*/
import {take,put,takeEvery,fork,takeLatest,select} from 'redux-saga/effects';

function *watchIncCount() {
    while(true) {
        // let rootState = yield select();
        // console.log(rootState);
        // 监听action的dispatch传过来的type
        let action = yield take("INC");
        // put将action里面的值传递给reducer
        yield put({type:"inc",data: action.data})
    }
}

function *watchDecCount() {
    // 并发监听
    // yield takeEvery('DEC',function *(action) {
    //     yield put({type:"dec",data:action.data});
    // })
    // 非并发监听
    yield takeLatest('DEC', function *(action) {
        yield put({type:"dec", data:action.data});
    })
}

export default [
    fork(watchIncCount),
    fork(watchDecCount)
];