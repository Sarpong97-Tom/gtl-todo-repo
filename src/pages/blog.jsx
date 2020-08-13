import React, { Component } from 'react';
import Blogs from '../components/blogs';

export class Blog extends Component {

    render() {
        return (
            <div>
               
                <Blogs posts = {this.props.posts} />
            </div>
        )
    }
}

export default Blog
