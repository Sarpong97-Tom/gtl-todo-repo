import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: "",
    }
    onChange = (e)=>
    {
        this.setState({[e.target.name]: e.target.value }) 
    }
    onSubmit = (e)=>
    {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
        
    }
    render() {
        return (
            <div>
                <form  onSubmit = {this.onSubmit} >
                <div className="row">
                    <div className="col-8">
                        <input
                         className = "form-control mr-sm-2"
                          type="text" 
                          placeholder = "Add todo" 
                          value = {this.state.title}
                          onChange = {this.onChange}
                          name = "title"
                        />
                        

                    </div>
                    <div className="col-4">
                        <input className = "btn btn-dark" type="submit"/>
                    </div>
                </div>
                
                </form>
            </div>
        )
    }
}

export default AddTodo
