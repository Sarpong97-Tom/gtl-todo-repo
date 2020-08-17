import React, { Component } from 'react'

export class Blogs extends Component {
 
    render() {
        if(this.props.loading)
        {
            return (
                <div>
                    <div className="spinner-border" style={{width: "5rem", height: "5rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                </div>
        )
        }
        else{
            return (
                <div>
                    { this.props.posts.map(post=>(
                        <div className="card">
                            <div className="card-header">
                                <h3> {post.title} </h3>
                            </div>
                            <div className="card-body">
                                <p> {post.body} </p>
                            </div>
                            <div className="card-footer">
                                <small> Posted by user with id {post.userId} </small>
                            </div>
                        </div>
                    )) }
                    
                </div>
            )
        }
    }
}

export default Blogs
