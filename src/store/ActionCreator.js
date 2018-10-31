import { REMOVE_ITEM, ADD_TODO_ITEM, HANDLE_INPUT, INIT_TODOLIST } from './ActionTypes';
import axios from 'axios';

export const getRemoveItemAction = (index) => ({
        type: REMOVE_ITEM,
        index
})

export const getAddTodoAction = () => ({
    type: ADD_TODO_ITEM
})

export const getHandleInputAction = (inputValue) => ({
    type: HANDLE_INPUT,
    inputValue
})

export const getInitList = (data) => ({
    type: INIT_TODOLIST,
    data
})

export const getTodoListAction = () => {
    return (dispatch) => {
        axios.get('api/getTodoListData')
        .then((res) => {
           const action = getInitList(res.data);
            dispatch(action)
           console.log(res.data)
        })
    }
}
   