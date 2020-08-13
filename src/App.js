import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
//Pages
import About from './pages/about'
import Blog from './pages/blog'


// Components
import Header from './components/header';
import Todos from './components/todos';
import AddTodo from './components/add-todo';
import axios from 'axios';


export class App extends Component {
 constructor(props){
   super(props)

   this.state = 
   { 
       posts: [],
       todos: [],
    }

    
 }

 getTodos()
 {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6')
    .then( res=>{
      this.setState({todos: res.data })
      
    }  )  
    .catch(err=>{

    }) 
 }

 getPosts(){
   axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7')
   .then(res=>{
     console.log(res.data);
     
     this.setState({posts: res.data  })
   })
   .catch(err=>{
     alert("Could not fetch posts. Check your internet connection")
   })
 }

 componentWillMount()
 {
    this.getTodos();
    this.getPosts();
 }




  updateTodo (todo)
  {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo)
    .then(res=>{
     this.setState({todo: todo })
    })
    .catch(err=>{
      alert(" Could not update todo");
      
    })
  }


  isComplete =(id)=>{
    
   this.state.todos.map(todo=>{
     if(todo.id === id )
     {
       todo.completed = !todo.completed
       this.updateTodo(todo);
     }
     
     return todo;


   })
    
  }

  deleteTodo = (id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>{
      this.setState({todos: [...this.state.todos.filter(todo=>todo.id !== id)]})
    })
    .catch(err=>{
      alert("Could not delete todo")
    })
    
    
  }
  addTodo = (title)=>
  {
    let newTodo = {
      id : this.state.todos.length +1,
      title :title,
      completed: false
    }
    axios.post("https://jsonplaceholder.typicode.com/todos",newTodo)
    .then(res=>{
      this.setState({todos: [...this.state.todos,newTodo] })
    })
    .catch(err=>{
      console.log(err);
      
    })
    
  }
  render() {
    
    return (
      <Router>
      <div>
        <Header/>

        <div className = "container">
          <Route exact path = "/" render = {props =>(
            <React.Fragment>
                <AddTodo addTodo = {this.addTodo} />
                <Todos
                  todos = {this.state.todos}
                  isComplete = {this.isComplete} 
                  deleteTodo = {this.deleteTodo}
                />            
            </React.Fragment>
          )} />



          <Route path = "/about" component = {About} />
         <Route path = "/blog" render = {props=>(
           <Blog posts = {this.state.posts} />
         )} />

          

        </div>

        
      </div>

      </Router>
    )
  }
}

export default App

