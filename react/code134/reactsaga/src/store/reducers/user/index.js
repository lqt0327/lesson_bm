let defaultState={
    uid:localStorage['uid']?localStorage['uid']:"",
    username:localStorage['username']?localStorage['username']:"",
    isLogin:localStorage['isLogin']?Boolean(localStorage['isLogin']):false
};

function userReducer(state=defaultState, action) {
    switch(action.type) {
        case "login":
            localStorage['username'] = action.data.username;
            localStorage['isLogin'] = true;
            localStorage['uid']=action.data.uid;
            console.log(state);
            return {...state, ...action.data};
        case "out_login":
            localStorage.clear();
            return Object.assign({}, state, {username:"", isLogin: false,uid:''});
        default:
            return state;
    }
}

export default userReducer;