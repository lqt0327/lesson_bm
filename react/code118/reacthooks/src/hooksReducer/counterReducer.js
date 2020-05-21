export let defaultState={
    count:0
};
export let CounterReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case "dec":
            return {...state,...action.payload};
        case "inc":
            return {...state,...action.payload};
        default:
            return state;
    }

};