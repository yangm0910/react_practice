import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import store from './store';
import { getRemoveItemAction, getAddTodoAction, getHandleInputAction } from './store/ActionCreator';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        store.subscribe(this.handleStoreChange.bind(this));

    }
    handleStoreChange() {
        this.setState(store.getState());
    }

    render() {
        return (
            <TodoListUI
                todoList = {this.state.todoList}
                inputValue = {this.state.inputValue}
                handleRemoveItem = {this.handleRemoveItem}
                handleOnClick = {this.handleOnClick}
                handleInput = {this.handleInput}
            />
        )
    }
    handleRemoveItem (index){
        // console.log(index);
        const action = getRemoveItemAction(index);
        store.dispatch(action);

    }
    handleOnClick = () =>{
        const action = getAddTodoAction();
        store.dispatch(action);
    }

    handleInput = (e) => {
        const value = e.target.value;
        const action = getHandleInputAction(value)
        store.dispatch(action);
    }
}

export default TodoList;
