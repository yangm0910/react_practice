import React, { Component } from 'react';
import { Input, Button, List} from 'antd';

class TodoListUI extends Component {

    render() {
        return (
            <div  >
                <div>
                    <Input value={this.props.inputValue} onChange={this.props.handleInput} style={{ width: 350 }} />
                    <Button style={{ margin: '20px' }} onClick={this.props.handleOnClick} type="primary" >提交</Button>
                </div>
                <div style={{ width: 350 }}>
                    <List
                        size="small"
                        bordered
                        dataSource={this.props.todoList}
                        renderItem={(item, index) => (
                                <List.Item onClick = {() => this.props.handleRemoveItem(index)}>{item}</List.Item> 
                            )}
                    />
                </div>
              
            </div>
        )
    }
}

export default TodoListUI;
