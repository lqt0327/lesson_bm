function homeReducer(state = {navs:[]},action) {
    switch(action.type) {
        case "NAV":
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
export default homeReducer;