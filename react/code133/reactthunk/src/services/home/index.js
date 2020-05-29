import config from '../../assets/js/conf/config';
import request from '../../assets/js/utils/request';

export function getNavData() {
    return request(config.baseUrl+"/home/index/nav?token=1ec949a15fb709370f");
}