import {getNavData} from '../../../services/home';

export function getNav() {
    return (dispatch) => {
        getNavData().then(res=>{
            let data=[];
            if(res.code === 200) {
                data = res.data;
            }
            dispatch({
                type:"NAV",
                data:{navs:data}
            })
        });
    }
}