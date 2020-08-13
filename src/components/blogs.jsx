import React, { Component } from 'react'

export class Blogs extends Component {
    render() {
        return (
            <div>
                { this.props.posts.map(post=>(
                    <h2> {post.title} </h2>
                )) }
                
            </div>
        )
    }
}

export default Blogs
