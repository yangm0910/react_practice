import { REMOVE_ITEM, ADD_TODO_ITEM, HANDLE_INPUT, INIT_TODOLIST } from './ActionTypes';
const defalutState = {
    inputValue: '',
    todoList: []
};

//reducer绝不可以直接更改接收的state
export default (state = defalutState, action) => {
    // console.log(moment(new Date()).valueOf())
    // console.log(moment(moment(new Date()).valueOf()).format('YYYY-MM-DD'));
    if(action.type === HANDLE_INPUT){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if(action.type === INIT_TODOLIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.todoList = action.data;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.todoList.push(newState.inputValue);
        newState.inputValue = '';
        return newState;        
    }
    if(action.type === REMOVE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.todoList.splice(action.index, 1);
        return newState;
    }
    return state;
}