function homeReducer(state = {navs:[]},action) {
    switch(action.type) {
        case "nav":
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
export default homeReducer;