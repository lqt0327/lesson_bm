import {uploadHeadData,loginData} from '../../../services/user';

export function login(payload){
    return (dispatch)=>{
        loginData(payload).then(res=>{
            let data={uid:"",username:"",isLogin:false};
            if (res.code ===200){
                data["uid"]=res.data.uid;
                data["username"]=res.data.nickname;
                data["isLogin"]=true;
            }
            dispatch({
                type:"LOGIN",
                data:data
            });
            payload.success(res);
        });
    }
}

export function outLogin() {
    return {
        type:"OUTLOGIN"
    }
}

export function uploadHead(payload) {
    return (dispatch)=>{
        uploadHeadData(payload).then(res=>{
            // console.log(res);
            if (payload.success){
                payload.success(res);
            }
        })
    }
}