import { REMOVE_ITEM, ADD_TODO_ITEM, HANDLE_INPUT } from './ActionTypes';

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