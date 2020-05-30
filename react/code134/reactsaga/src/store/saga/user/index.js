import {take,fork,call,put} from 'redux-saga/effects';
import {loginData,uploadHeadData} from '../../../services/user';

function *watchLogin() {
    while(true) {
        let action = yield take("LOGIN");
        console.log(action);
        let payload =yield call(loginData,action.data);
        let data = {};
        if(payload.code === 200) {
            data.uid = payload.data.uid;
            data.username = payload.data.nickname;
            yield put({type:"login", data});
        }
        if(action.data.success) {
            action.data.success(payload);
        }
    }
}

function *watchOutLogin() {
    while(true) {
        yield take("OUTLOGIN");
        yield put({type:"out_login"});
    }
}

function *watchUploadHead() {
    while(true) {
        let action = yield take("UPLOAD_HEAD");
        let payload = yield call(uploadHeadData,action.data);
        if(action.data.success) {
            action.data.success(payload)
        }
    }
}

export default [
    fork(watchLogin),
    fork(watchOutLogin),
    fork(watchUploadHead)
]