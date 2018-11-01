import React, { Component } from 'react';
import store from './reactStore'
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }

    render () {
        return (
            <div>
                <div>
                    <input value = {this.props.inputValue} onChange = {this.props.handleInputChange}/>
                    <button>提交</button>
                </div>
                <div>
                    <ul>
                        <li>黎明降至</li>
                    </ul>
                </div>
            </div>
        )
    }
}
// store.state -> this.props
const mapStateToProps  = (state) => {
    return {
        inputValue: state.inputValue
    }
}
// store.dispatch -> this.props
const mapDispatchToProps  = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
            type:'handle_input_changed',
            value:  e.target.value
            }
            dispatch(action);
        }
       
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(TodoList);