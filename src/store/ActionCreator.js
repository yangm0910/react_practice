import { REMOVE_ITEM, ADD_TODO_ITEM, HANDLE_INPUT, INIT_TODOLIST } from './ActionTypes';

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