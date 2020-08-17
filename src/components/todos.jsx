import React, { Component } from 'react'
import TodoItem from './todo-item'

class Todos extends Component {
    render() {
        if(this.props.loading){
            return (
                    <div>
                        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            )
        }
        else {
            
            return this.props.todos.map(todo=>(
                <TodoItem
                key = {todo.id}  
                todo = {todo}
                isComplete = {this.props.isComplete}
                deleteTodo = {this.props.deleteTodo}
                  
               />
            ))
        }
    }
}

export default Todos
