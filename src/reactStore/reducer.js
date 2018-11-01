const defaultState = {
    inputValue: '',
    list: []
}


export default (state = defaultState, action)  => {
    if(action.type === "handle_input_changed"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}