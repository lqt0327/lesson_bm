let defaultState={
    uid:localStorage['uid']?localStorage['uid']:"",
    username:localStorage['username']?localStorage['username']:"",
    isLogin:localStorage['isLogin']?Boolean(localStorage['isLogin']):false
};

function userReducer(state=defaultState, action) {
    switch(action.type) {
        case "LOGIN":
            localStorage['username'] = action.data.username;
            localStorage['isLogin'] = true;
            localStorage['uid']=action.data.uid;
            return {...state, ...action.data};
        case "OUTLOGIN":
            localStorage.clear();
            return Object.assign({}, state, {username:"", isLogin: false,uid:''});
        default:
            return state;
    }
}

export default userReducer;