import React, { Component } from 'react'
import TodoItem from './todo-item'

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <TodoItem
             key = {todo.id}  
             todo = {todo}
             isComplete = {this.props.isComplete}
             deleteTodo = {this.props.deleteTodo}  
            />
        ))
    }
}

export default Todos
