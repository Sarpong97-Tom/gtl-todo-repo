import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Todos from './components/todos';
import AddTodo from './components/add-todo';

export class App extends Component {
  state = {
    todos : [
      {
        id:1,
        title: "todo 1",
        completed: true
      },
      {
        id:2,
        title: "todo 2",
        completed: true
      },
      {
        id:3,
        title: "todo 3",
        completed: true
      },
      {
        id:4,
        title: "todo 4",
        completed: false
      },
      {
        id:5,
        title: "todo 5",
        completed: false
      },
    ]
  }
  isComplete =(id)=>{
    this.setState({todo: this.state.todos.map(todo=>{
      if(todo.id === id)
      {
        todo.completed = !todo.completed
        return todo
      }
    })  })
    
  }

  deleteTodo = (id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id != id)]})
    
  }
  addTodo = (title)=>
  {
    console.log(title);
    
  }
  render() {
    return (
      <Router>
      <div>
        <Header/>

        <div className = "container">
          <AddTodo addTodo = {this.addTodo} />
        <Todos
          todos = {this.state.todos}
          isComplete = {this.isComplete} 
          deleteTodo = {this.deleteTodo}
        />
        </div>

        
      </div>

      </Router>
    )
  }
}

export default App

