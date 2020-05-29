import config from '../../assets/js/conf/config';
import request from '../../assets/js/utils/request';

//会员登录
export function loginData(data) {
    return request(config.baseUrl+"/home/user/pwdlogin?token=1ec949a15fb709370f","post",data);
}

//头像上传
export function uploadHeadData(data) {
    return request(config.baseUrl+"/user/myinfo/formdatahead?token=1ec949a15fb709370f","file",data,data.config)
}
