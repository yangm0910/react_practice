import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getRemoveItemAction, getAddTodoAction, getHandleInputAction } from './store/ActionCreator';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange.bind(this));

    }
    handleStoreChange() {
        this.setState(store.getState());
    }

    render() {
        return (
            <div  >
                <div>
                    <Input value={this.state.inputValue} onChange={this.handleInput} style={{ width: 350 }} />
                    <Button style={{ margin: '20px' }} onClick={this.handleOnClick} type="primary" >提交</Button>
                </div>
                <div style={{ width: 350 }}>
                    <List
                        size="small"
                        bordered
                        dataSource={this.state.todoList}
                        renderItem={(item, index) => (<List.Item onClick = {this.handleRemoveItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
              
            </div>
        )
    }
    handleRemoveItem (index){
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
