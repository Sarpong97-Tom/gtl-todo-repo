import React, { Component } from 'react'

class TodoItem extends Component {

    getTextStyle(){
        return {
            textDecoration: this.props.todo.completed
            ? 'line-through'
            : 'none'
        }
    }
    render() {
        const {id, title} = this.props.todo
        return (
            <div className = "todo-item" >
                <div className="row">
                    <div className="col-2">
                        <input
                         type="checkbox" 
                         onChange = {this.props.isComplete.bind(this,id)}  
                        />
                    </div>
                    <div className="col-8">
                        <p style = {this.getTextStyle()} > {title} </p>
                    </div>
                    <div className="col-2">
                        <button className = " btn1  btn btn-danger" onClick = {this.props.deleteTodo.bind(this,id)}  >X</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default TodoItem
