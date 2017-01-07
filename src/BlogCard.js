import React, { Component } from 'react';
import './App.css'
import first120CharOfPost from './blogModels'

export default class BlogCard extends Component {

  render() {
    const blog = this.props.blog
    // const blogSnippet = 
    return (
      <div>
        <h2>{blog.title}</h2>
        <h3>{first120CharOfPost(blog.content)}</h3>
        <p>{blog.content}</p>
      </div>
    )
  }
}